console.debug('running injected script')
// this ipc is isolated and exposed by main/preload.js
const ipc = window.TWW.ipc
const injectedCode = window.injectedCode
const urls = {
  dashboard: 'https://web.dashboard.gtomato.com',
  roomBooking: 'https://web.dashboard.gtomato.com/room-booking/standalone',
  supportTicket: 'https://osticket.gtomato.com/open.php',
}
/**
 * Injection happens in create-main-window.js
 * @type {{
 * isBoldUsername: string,
 * isBorderless: string,
 * isBubbleDisplayDate: string,
 * isJFOpen: string,
 * isNotoSans: string,
 * isPingFang: string,
 * isSubpixel: string,
 * emojiMart: string,
 * emojiPicker: string,
 * darkModeFixes: string,
 * }} */
const injectedCss = injectedCode['CSS']

/**
 * Injection happens in create-main-window.js
 * @type {{
 * gt: string,
 * sunny: string,
 * moon: string,
 * roomBooking: string,
 * supportTicket: string,
 * emojiTrigger: string
 * }} */
const injectedSvg = injectedCode['SVG']

const defaultSettings = {
  isDark: true,
  isBorderless: true,
  isBoldUsername: true,
  isBubbleDisplayDate: true,
  isPingFang: true,
  isNotoSans: false,
  isJFOpen: false,
  isSubpixel: false,
}

class Storage {
  constructor() {
    const self = this
    this.onChangeHandlers = new Map()
    this.settings = new Proxy(defaultSettings, {
      get(target, name, receiver) {
        console.debug(`Getting ${name}`)
        return (window.localStorage.getItem(name) || (target[name] ? '1' : '0')) === '1'
      },
      set(target, name, value, receiver) {
        const convertedValue = value ? '1' : '0'
        console.debug(`Settings ${name}=${convertedValue}`)

        // update localstorage
        window.localStorage.setItem(name, convertedValue)

        // send to main process
        ipc.send('application-settings', JSON.stringify(self.getApplicationSettings()))

        // trigger registered handlers
        const handlers = self.onChangeHandlers.get(name) || []
        handlers.forEach(it => it(value))
      },
    })

    // send the application settings to main process for rendering the application menu
    ipc.send('application-settings', JSON.stringify(self.getApplicationSettings()))
  }

  getApplicationSettings() {
    return this.settings
  }

  /**
   * Listen the storage changes
   * @param key string
   * @param handler   passing the changed value in first arguments
   */
  on(key, handler) {
    const handlers = this.onChangeHandlers.get(key)
    if (Array.isArray(handlers)) {
      // mutate reference
      handlers.push(handler)
    } else {
      this.onChangeHandlers.set(key, [handler])
    }
  }
}

/**
 *
 * @returns {(function(*, *=): void)|*}
 */
function createDebounce() {
  let scheduledToken = null
  return (fn, ms) => {
    clearTimeout(scheduledToken)
    scheduledToken = setTimeout(() => {
      fn()
    }, ms)
  }
}

const storage = new Storage()

function registerDarkModeHandling() {
  console.debug('registerDarkModeHandling')

  const updateUI = isDark => {
    if (isDark) {
      // noinspection JSUnresolvedVariable
      DarkReader.enable(
        {
          brightness: 150,
          contrast: 105,
          sepia: 0,
          grayscale: 0,
        },
        {
          invert: [],
          css: injectedCss.darkModeFixes, // this variable is injected from main process
        },
      )
    } else {
      DarkReader.disable()
    }
  }

  updateUI(storage.settings.isDark)

  // add script to DOM
  storage.on('isDark', value => {
    updateUI(value)
  })

  ipc.on('isDark', () => {
    storage.settings.isDark = !storage.settings.isDark
  })
}

function registerBooleanStyleSheet(key, { css }) {
  console.debug('registerBooleanStyleSheet', key, css)

  const style = document.createElement('style')
  style.innerText = css.trim()

  const updateUI = bool => {
    if (bool) {
      document.head.appendChild(style)
    } else {
      style.remove()
    }
  }

  updateUI(storage.settings[key])

  storage.on(key, value => {
    updateUI(value)
  })

  ipc.on(key, () => {
    storage.settings[key] = !storage.settings[key]
  })
}

function registerBadgeHandling() {
  console.debug('registerBadgeHandling')

  let lastTitle = ''

  function updateBadge() {
    const title = window.document.title

    if (lastTitle !== title) {
      lastTitle = title
      const matches = window.document.title.match(/\d+/)
      const count = matches === null ? 0 : matches.join('')

      ipc.send('badge', { count })

      console.log('Updated badge...', count)
    }
  }

  class NotificationWrapper extends window.Notification {
    constructor(title, options) {
      super(title, options)
      // wait next frame to update
      requestAnimationFrame(() => updateBadge())
    }
  }

  window.Notification = NotificationWrapper

  new MutationObserver(function () {
    // any changes to title will update the badge
    updateBadge()
  }).observe(document.querySelector('title'), {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  })
}

function registerResetRecommendedSettings() {
  ipc.on('reset-recommended-settings', () => {
    for (const [key, value] of Object.entries(defaultSettings)) {
      storage.settings[key] = value
    }
  })
}

function registerFontHandling() {
  registerBooleanStyleSheet('isPingFang', {
    css: injectedCss.isPingFang,
  })

  // handle isNotoSans
  registerBooleanStyleSheet('isNotoSans', {
    css: injectedCss.isNotoSans,
  })

  registerBooleanStyleSheet('isJFOpen', {
    css: injectedCss.isJFOpen,
  })

  storage.on('isPingFang', value => {
    if (value) {
      storage.settings.isNotoSans = false
      storage.settings.isJFOpen = false
    }
  })

  storage.on('isNotoSans', value => {
    if (value) {
      storage.settings.isPingFang = false
      storage.settings.isJFOpen = false
    }
  })

  storage.on('isJFOpen', value => {
    if (value) {
      storage.settings.isPingFang = false
      storage.settings.isNotoSans = false
    }
  })
}

// brain-less copy from https://jsfiddle.net/Xeoncross/4tUDk/
const pasteHtmlAtCaret = html => {
  let sel, range
  if (window.getSelection) {
    sel = window.getSelection()
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0)
      range.deleteContents()

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      const el = document.createElement('div')
      el.innerHTML = html
      let frag = document.createDocumentFragment(),
        node,
        lastNode
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node)
      }
      range.insertNode(frag)

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange()
        range.setStartAfter(lastNode)
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }
}

/**
 * Emit CustomEvent('onRootMutate', { detail: MutationRecord[] }) when there is a change in root element
 */
const registerRootNodeMutationObserver = () => {
  // Select the node that will be observed for mutations
  const targetNode = document.getElementById('root')

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(function (mutationsList, observer) {
    window.dispatchEvent(
      new CustomEvent('onRootMutate', {
        bubbles: true,
        detail: mutationsList,
      }),
    )
  })

  // Start observing the target node for configured mutations
  // this observer don't need to disconnect
  observer.observe(targetNode, config)
}

const registerAutoRefreshWhenTeamworkTimeoutHandling = () => {
  new MutationObserver(function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (
        mutation.type === 'childList' &&
        mutation.addedNodes.length === 1 &&
        mutation.addedNodes[0].getAttribute('role') === 'dialog'
      ) {
        const refreshButton = mutation.addedNodes[0].querySelector('.btn.btn-primary')
        if (refreshButton?.innerText?.toLowerCase() === 'refresh') {
          // auto toggle the refresh button when timeout
          refreshButton?.click()
        }
      }

      if (
        mutation.type === 'childList' &&
        mutation.addedNodes.length === 1 &&
        mutation.addedNodes[0].className === 'dropdown bootstrapMenu'
      ) {
        document.querySelectorAll('.dropdown.bootstrapMenu').forEach((el, key, parent) => {
          if (key > 0 && key < parent.length - 1) {
            // 0 -> reserve for setting dropdown
            // parent.length - 1 -> reserve for the chat bubble dropdown
            el.remove()
          }
        })
      }
    }
  }).observe(document.body, { childList: true })
}

function registerFunctionalButtons() {
  window.addEventListener(
    'onRootMutate',
    ({ detail: mutationsList }) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' &&
          mutation.removedNodes.length === 1 &&
          mutation.removedNodes[0]?.className === 'SimpleSplashView'
        ) {
          const addButton = ({ id, onClick, icon, adjacentClass = '.action.task' }) => {
            const adjacentElement = mutation.target?.querySelector(adjacentClass)

            if (adjacentElement && !document.getElementById(id)) {
              adjacentElement.insertAdjacentHTML(
                'beforebegin',
                `<div class="action task"><div id="${id}" class="icon" style="fill:#fff">${icon}</div></div>`,
              )
              // require to get it in runtime when the dom tree has changed
              document.getElementById(id)?.addEventListener('click', onClick)
            }
          }

          addButton({
            id: 'dark-toggle',
            adjacentClass: '.action.more',
            onClick: evt => {
              if (storage.settings.isDark) {
                storage.settings.isDark = false
                storage.settings.isBorderless = false
                evt.target.outerHTML = injectedSvg.moon
              } else {
                storage.settings.isDark = true
                storage.settings.isBorderless = true
                evt.target.outerHTML = injectedSvg.sunny
              }
            },
            icon: storage.settings.isDark ? injectedSvg.sunny : injectedSvg.moon,
          })

          // os ticket button
          addButton({
            id: 'os-ticket',
            onClick: () => {
              window.open(urls.supportTicket, null, 'width=1440,height=900')
            },
            icon: injectedSvg.supportTicket,
          })

          // room booking button
          addButton({
            id: 'room-booking',
            onClick: () => {
              window.open(
                `${urls.roomBooking}?appKey=${window.options.client.appKey}&appToken=${window.options.client.token}`,
                null,
                'width=1440,height=900',
              )
            },
            icon: injectedSvg.roomBooking,
          })

          // dashboard button
          addButton({
            id: 'dashboard',
            onClick: () => {
              window.open(
                `${urls.dashboard}/?appKey=${window.options.client.appKey}&appToken=${window.options.client.token}`,
                null,
                'width=1440,height=900',
              )
            },
            icon: injectedSvg.gt,
          })
        }
      }
    },
    { passive: true },
  )
}

function registerEmojiHandling() {
  window.emojiMart.definePicker('emoji-picker', {
    color: '#7bb5f9',
    native: true,
    emojiTooltip: true,
    showPreview: false,
    showSkinTones: false,
    theme: storage.settings.isDark ? 'dark' : 'light',
    onClick: (emoji, event) => {
      const el = document.getElementsByClassName('Editable')[0]
      el?.focus()

      requestAnimationFrame(() => {
        pasteHtmlAtCaret(emoji.native)
        el?.dispatchEvent(new Event('input'))
      })
    },
  })

  const emojiPickerStyleEl = document.createElement('style')
  emojiPickerStyleEl.innerText = injectedCss.emojiPicker

  // add style to DOM
  document.head.appendChild(emojiPickerStyleEl)

  // create emoji picker
  const picker = document.createElement('emoji-picker')
  document.body.prepend(picker)

  let dismissEmojiPicker = null
  const showEmojiPicker = () => {
    document.getElementById('emoji-trigger')?.classList.add('hovered')
    if (!picker?.classList.contains('show')) {
      picker?.classList.add('show')
    }
  }
  const cancelDismissEmojiPicker = () => {
    if (dismissEmojiPicker != null) {
      clearTimeout(dismissEmojiPicker)
    }
  }
  const scheduleDismissEmojiPicker = () => {
    cancelDismissEmojiPicker()
    dismissEmojiPicker = setTimeout(() => {
      picker?.classList.remove('show')
      document.getElementById('emoji-trigger')?.classList.remove('hovered')
    }, 500)
  }

  picker.addEventListener('mouseenter', cancelDismissEmojiPicker)
  picker.addEventListener('mouseleave', scheduleDismissEmojiPicker)

  // add the css
  const emojiMartStylEl = document.createElement('style')
  emojiMartStylEl.innerText = injectedCss.emojiMart
  document.head.appendChild(emojiMartStylEl)

  window.addEventListener(
    'onRootMutate',
    ({ detail: mutationsList }) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' &&
          mutation.addedNodes.length === 0 &&
          mutation.target?.className === 'ChatView' &&
          mutation.nextSibling?.className === 'InputBox'
        ) {
          const adjacentElement = document.getElementsByClassName('file')[0]
          const hasEmojiTrigger = !!document.getElementById('emoji-trigger')

          if (adjacentElement && !hasEmojiTrigger) {
            adjacentElement.insertAdjacentHTML('beforebegin', injectedSvg.emojiTrigger)
            // require to get it in runtime when the dom tree has changed
            const emojiTrigger = document.getElementById('emoji-trigger')
            emojiTrigger.addEventListener('mouseenter', showEmojiPicker)
            emojiTrigger.addEventListener('mousemove', showEmojiPicker)
            emojiTrigger.addEventListener('mouseleave', scheduleDismissEmojiPicker)
          }
        }
      }
    },
    { passive: true },
  )
}

/**
 * Handled two scenarios
 * 1. update side bar chat box when editing draft
 * 2. update side bar chat box when scrolling in a virtual list
 */
function registerDraftHandling() {
  const displayNameIdMap = new Map()
  const idDisplayNameMap = new Map()
  const idDisplayTypeMap = new Map()
  const chatBoxMessageMap = new Map()
  let currentUserId = null
  const uid = () => displayNameIdMap.get(document.querySelector('#root .NavigationBar .Avatar .displayName').innerHTML)
  const chatBoxKey = id => `${idDisplayTypeMap.get(id)}${id}`
  const updateChatBoxDebounce = createDebounce()

  window.addEventListener(
    'onRootMutate',
    ({ detail: mutationsList }) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' &&
          mutation.addedNodes.length === 0 &&
          mutation.target &&
          mutation.target.className === 'ChatView' &&
          mutation.nextSibling &&
          mutation.nextSibling.className === 'InputBox'
        ) {
          const editArea = mutation.target.querySelector('.Editable')
          const debounce = createDebounce()
          const id = uid()
          const cbKey = chatBoxKey(id)

          if (editArea) {
            // register to write draft the localStorage
            editArea.addEventListener(
              'input',
              event => {
                // event handling code for sane browsers
                const value = event.target.innerHTML

                debounce(() => {
                  window.localStorage.setItem(cbKey, value)

                  const chatBox = document.querySelector(`.item[data-conversation-id="${cbKey}"]`)
                  const memberEl = chatBox?.querySelector('.who > .member')
                  const textEl = chatBox?.querySelector('.what > .text, .what > .nonText')

                  if (value === '') {
                    // the draft is empty, rollback the html
                    const senderId = +chatBoxMessageMap.get(cbKey)?.senderId
                    const displayName = senderId === currentUserId ? 'You' : idDisplayNameMap.get(senderId)

                    if (id === senderId && memberEl) {
                      // remove if there is a redundant element
                      memberEl.remove()
                    } else if (memberEl) {
                      memberEl.innerHTML = `${displayName}:`
                    }

                    if (textEl) {
                      const messageMeta = chatBoxMessageMap.get(cbKey)?.meta
                      // TODO: identify the meta data type for image, video, voice, etc.
                      textEl.innerHTML = messageMeta?.content ?? `[sent ${messageMeta?.file?.length} file(s)]`
                    }
                  } else {
                    if (memberEl) {
                      memberEl.innerHTML = '✏️ You:'
                    } else {
                      chatBox
                        ?.querySelector('.subject')
                        ?.insertAdjacentHTML('afterend', `<div class="who"><span class="member">✏️ You:</span></div>`)
                    }
                    if (textEl) {
                      textEl.innerHTML = value
                    }
                  }
                }, 150)
              },
              { passive: true },
            )

            // restore the draft
            editArea.innerHTML = window.localStorage.getItem(cbKey) || ''
          }
        }
        if (
          mutation.target?.className === 'ReactVirtualized__Grid__innerScrollContainer' ||
          mutation.target?.className === 'ReactVirtualized__Grid ReactVirtualized__List'
        ) {
          // handle virtual list scrolling will flush the html without draft
          updateChatBoxDebounce(() => {
            document.querySelectorAll('.ReactVirtualized__List .item').forEach((chatBox, index, parent) => {
              // just schedule the UI change for next frame to keep the application smooth
              requestAnimationFrame(() => {
                const cbKey = parent[index].getAttribute('data-conversation-id')
                const savedDraft = window.localStorage.getItem(cbKey)

                if (!savedDraft || savedDraft === '') {
                  return
                }

                const memberEl = chatBox?.querySelector('.who > .member')
                const textEl = chatBox?.querySelector('.what > .text, .what > .nonText')
                if (memberEl) {
                  memberEl.innerHTML = '✏️ You:'
                }
                if (textEl) {
                  textEl.innerHTML = savedDraft
                }
              })
            })
          }, 16)
        }
      }
    },
    { passive: true },
  )

  const processChatBoxMessage = chatBoxMessage => {
    // receiverType:
    // 0 -> personal chat
    // 1 -> group / announcement
    if (+chatBoxMessage.receiverType === 0) {
      // user, use the state to determine the chat box uid
      if (+chatBoxMessage.state?.[chatBoxMessage.senderId] === 1) {
        chatBoxMessageMap.set(`u${chatBoxMessage.receiverId}`, chatBoxMessage)
      } else {
        chatBoxMessageMap.set(`u${chatBoxMessage.senderId}`, chatBoxMessage)
      }
    } else if (+chatBoxMessage.receiverType === 1) {
      // group, use the state to determine the chat box uid
      if (+chatBoxMessage.state?.[chatBoxMessage.senderId] === 1) {
        chatBoxMessageMap.set(`g${chatBoxMessage.receiverId}`, chatBoxMessage)
      } else if (+chatBoxMessage.state?.[chatBoxMessage.receiverId] === 1) {
        chatBoxMessageMap.set(`g${chatBoxMessage.senderId}`, chatBoxMessage)
      } else {
        chatBoxMessageMap.set(`g${chatBoxMessage.receiverId}`, chatBoxMessage)
      }
    }
  }

  const processSentOutMessage = chatBoxMessage => {
    // receiverType:
    // 0 -> personal chat
    // 1 -> group / announcement
    // because we actively send out, would always use receiverId in the chatbox
    if (+chatBoxMessage.receiverType === 0) {
      // user, use the state to determine the chat box uid
      chatBoxMessageMap.set(`u${chatBoxMessage.receiverId}`, chatBoxMessage)
    } else if (+chatBoxMessage.receiverType === 1) {
      // group, use the state to determine the chat box uid
      chatBoxMessageMap.set(`g${chatBoxMessage.receiverId}`, chatBoxMessage)
    }
  }

  // get the intercepted response and build up the data we need for draft notes handling
  window.addEventListener(
    'onXHRResponse',
    ({ detail: { method, url, responseText } }) => {
      if (!responseText) return
      const json = JSON.parse(responseText)

      if (url.endsWith('api/group')) {
        if (json?.data && Array.isArray(json.data)) {
          json.data.forEach(group => {
            displayNameIdMap.set(group.name, group.groupId)
            idDisplayNameMap.set(group.groupId, group.name)
            idDisplayTypeMap.set(group.groupId, 'g')
          })
        }
      } else if (url.endsWith('api/user')) {
        if (json?.data && Array.isArray(json.data)) {
          json.data
            .filter(user => user.deleted !== true)
            .forEach(user => {
              displayNameIdMap.set(user.displayName, user.tbId)
              idDisplayNameMap.set(user.tbId, user.displayName)
              idDisplayTypeMap.set(user.tbId, 'u')
            })
        }
      } else if (url.endsWith('api/message/recent')) {
        if (json?.data && Array.isArray(json.data)) {
          json.data.forEach(processChatBoxMessage)
        }
      } else if (url.endsWith('api/user/me')) {
        currentUserId = json?.data?.user?.tbId
      } else if (url.endsWith('api/message/sendMsg')) {
        document.getElementsByClassName('Editable')[0]?.dispatchEvent(new Event('input'))
      }
    },
    { passive: true },
  )

  const safeJsonParse = data => {
    try {
      return JSON.parse(data)
    } catch (e) {
      return null
    }
  }

  window.addEventListener('onWebSocketReceive', ({ detail }) => {
    const json = safeJsonParse(detail.data)
    if (json?.senderId) {
      processChatBoxMessage(json)
    }
  })

  window.addEventListener('onXHRSend', ({ detail }) => {
    const json = safeJsonParse(
      '{"' +
        decodeURIComponent(detail).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
        '"}',
    )
    if (json?.senderId) {
      json.meta = safeJsonParse(json.meta)
      processSentOutMessage(json)
    }
  })
}

/**
 * Emit CustomEvent('onXHRResponse', { detail: { url: string, method: string, responseText: string } }) when there is XHR
 * Emit CustomEvent('onXHRSend', { detail: string }) when there is XHR
 */
function registerXHRInterceptor() {
  const rawOpen = XMLHttpRequest.prototype.open
  const rawSend = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.open = function (method, url) {
    this._method = method
    this._url = url
    if (!this._hooked) {
      this._hooked = true
      setupHook(this)
    }
    rawOpen.apply(this, arguments)
  }
  XMLHttpRequest.prototype.send = function (data) {
    window.dispatchEvent(
      new CustomEvent('onXHRSend', {
        detail: data,
      }),
    )
    rawSend.apply(this, arguments)
  }

  function setupHook(xhr) {
    function getter() {
      delete xhr.responseText
      const ret = xhr.responseText
      setup()

      window.dispatchEvent(
        new CustomEvent('onXHRResponse', {
          detail: {
            url: this._url,
            method: this._method,
            responseText: ret,
          },
        }),
      )
      return ret
    }

    function setter(str) {}

    function setup() {
      Object.defineProperty(xhr, 'responseText', {
        get: getter,
        set: setter,
        configurable: true,
      })
    }
    setup()
  }
}

function registerWebSocketInterceptor() {
  window.WebSocket = new Proxy(window.WebSocket, {
    construct(target, args) {
      console.log('Proxying WebSocket connection', ...args)
      const ws = new target(...args)

      // Configurable hooks
      ws.hooks = {
        beforeSend: () => null,
        beforeReceive: () => null,
      }

      // Intercept send
      ws.send = new Proxy(ws.send, {
        apply(target, thisArg, args) {
          if (ws.hooks.beforeSend(args) === false) {
            return
          }
          return target.apply(thisArg, args)
        },
      })

      // Intercept events
      ws.addEventListener = new Proxy(ws.addEventListener, {
        apply(target, thisArg, args) {
          if (args[0] === 'message' && ws.hooks.beforeReceive(args) === false) {
            return
          }
          return target.apply(thisArg, args)
        },
      })

      Object.defineProperty(ws, 'onmessage', {
        set(func) {
          const onmessage = function onMessageProxy(event) {
            if (ws.hooks.beforeReceive(event) === false) {
              return
            }
            func.call(this, event)
          }
          return ws.addEventListener.apply(this, ['message', onmessage, false])
        },
      })

      // Save reference
      window._websockets = window._websockets || []
      window._websockets.push(ws)
      window.dispatchEvent(new Event('onWebsocketCreated'))

      return ws
    },
  })

  window.addEventListener('onWebsocketCreated', () => {
    window._websockets[0].hooks = {
      // Just log the outgoing request
      beforeSend: data => window.dispatchEvent(new CustomEvent('onWebSocketSend', { detail: data })),
      // Return false to prevent the on message callback from being invoked
      beforeReceive: data => window.dispatchEvent(new CustomEvent('onWebSocketReceive', { detail: data })),
    }
  })
}

function registerAutoScroll() {
  window.addEventListener(
    'onRootMutate',
    ({ detail: mutationsList }) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' &&
          mutation.addedNodes.length === 0 &&
          mutation.target &&
          mutation.target.className === 'ChatView'
        ) {
          const scrollView = document.querySelector('.scrollView')
          scrollView.style['overflow-anchor'] = 'auto'
          scrollView.style['overflow'] = 'scroll'

          scrollView.addEventListener('scroll', e => {
            if (e.target.scrollTop < 100) {
              e.target.querySelector('.previousButton')?.click()
            }
          })
        }
      }
    },
    { passive: true },
  )
}

// register XHR intercept the dispatch CustomEvent for post-processing
registerXHRInterceptor()

registerWebSocketInterceptor()

// register DOM change listener
registerRootNodeMutationObserver()

// register teamwork timeout auto refresh
registerAutoRefreshWhenTeamworkTimeoutHandling()

// add draft handling
registerDraftHandling()

// add new functional buttons to menu bar
registerFunctionalButtons()

// handle dark mode
registerDarkModeHandling()

// handle font
registerFontHandling()

// handle isSubpixel
registerBooleanStyleSheet('isSubpixel', {
  css: injectedCss.isSubpixel,
})

// handle isBorderless
registerBooleanStyleSheet('isBorderless', {
  css: injectedCss.isBorderless,
})

// handle isBoldUsername
registerBooleanStyleSheet('isBoldUsername', {
  css: injectedCss.isBoldUsername,
})

// handle isBubbleDisplayDate
registerBooleanStyleSheet('isBubbleDisplayDate', {
  css: injectedCss.isBubbleDisplayDate,
})

// handle docking badge
registerBadgeHandling()

// handle recommended settings
registerResetRecommendedSettings()

// handle emoji features
registerEmojiHandling()

registerAutoScroll()
