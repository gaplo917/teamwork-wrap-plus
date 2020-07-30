console.debug('running injected script')
// this ipc is isolated and exposed by main/preload.js
const ipc = window.TWW.ipc

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

const storage = new Storage()

function registerDarkModeHandling() {
  console.debug('registerDarkModeHandling')

  const darkReaderScript = document.createElement('script')
  darkReaderScript.setAttribute('type', 'text/javascript')
  darkReaderScript.setAttribute('src', 'https://unpkg.com/darkreader@4.9.15/darkreader.js')

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
          css: darkModeFixes, // this variable is injected from main process
        },
      )
    } else {
      DarkReader.disable()
    }
  }

  darkReaderScript.onload = () => {
    updateUI(storage.settings.isDark)
  }

  // add script to DOM
  document.head.appendChild(darkReaderScript)

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

  // just in case the notification hook not working
  setInterval(() => updateBadge(), 5000)

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
    css: `
* {
  font-family: 'PingFang HK', "Apple Color Emoji", -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}
  `,
  })

  // handle isNotoSans
  registerBooleanStyleSheet('isNotoSans', {
    css: `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;400;700&display=swap');
* {
  font-family: 'Noto Sans HK', "Apple Color Emoji", -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}
  `,
  })

  registerBooleanStyleSheet('isJFOpen', {
    css: `
@font-face {
  font-family: 'JFOpen';
  font-display: swap;
  src: url('https://cdn.jsdelivr.net/gh/gaplo917/open-huninn-font@master/font/jf-openhuninn-1.1.ttf') format('truetype');
}
* {
  font-family: 'JFOpen', "Apple Color Emoji", -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}
  `,
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

function registerEmojiHandling() {
  const scriptElement = document.createElement('script')
  scriptElement.setAttribute('type', 'text/javascript')
  scriptElement.setAttribute('src', 'https://cdn.jsdelivr.net/gh/gaplo917/emoji-mart-embed@master/dist/emoji-mart.js')

  scriptElement.onload = () => {
    window.emojiMart.definePicker('emoji-picker', {
      color: '#7bb5f9',
      native: true,
      emojiTooltip: true,
      showPreview: false,
      showSkinTones: false,
      theme: storage.settings.isDark ? 'dark' : 'light',
      onClick: (emoji, event) => {
        const el = document.getElementsByClassName('Editable')[0]
        el.focus()
        requestAnimationFrame(() => {
          pasteHtmlAtCaret(emoji.native)
        })
      },
    })
  }
  // add script to DOM
  document.head.appendChild(scriptElement)

  const style = document.createElement('style')
  style.innerText = `
emoji-picker {
  position: absolute;
  z-index: 0;
  right: 20px;
  bottom: 70px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.75);
  transition: all 150ms;
  opacity: 0;
}

emoji-picker.show {
  opacity: 1;
  z-index: 1000;
}

#emoji-trigger {
  fill: #bbb;
  stroke: #bbb;
}

#emoji-trigger.hovered {
  fill: #7bb5f9;
  stroke: #7bb5f9;
  transition: all 150ms;
}
  `
  // add style to DOM
  document.head.appendChild(style)

  // create emoji picker
  const picker = document.createElement('emoji-picker')
  document.body.prepend(picker)

  let dismissEmojiPicker = null
  const showEmojiPicker = () => {
    document.getElementById('emoji-trigger').classList.add('hovered')
    if (!picker.classList.contains('show')) {
      picker.classList.add('show')
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
      picker.classList.remove('show')
      document.getElementById('emoji-trigger').classList.remove('hovered')
    }, 500)
  }

  picker.addEventListener('mouseenter', cancelDismissEmojiPicker)
  picker.addEventListener('mouseleave', scheduleDismissEmojiPicker)

  // add the css
  const linkElement = document.createElement('link')
  linkElement.rel = 'stylesheet'
  linkElement.href = 'https://cdn.jsdelivr.net/gh/gaplo917/emoji-mart-embed@master/dist/emoji-mart.css'
  document.head.appendChild(linkElement)

  // Select the node that will be observed for mutations
  const targetNode = document.getElementById('root')

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true }

  // Callback function to execute when mutations are observed
  const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
      if (
        mutation.type === 'childList' &&
        mutation.addedNodes.length === 0 &&
        mutation.target &&
        mutation.target.className === 'ChatView' &&
        mutation.nextSibling &&
        mutation.nextSibling.className === 'InputBox'
      ) {
        const adjacentElement = document.getElementsByClassName('file')[0]
        if (adjacentElement) {
          adjacentElement.insertAdjacentHTML(
            'beforebegin',
            `
<svg id="emoji-trigger" style="margin: 5px" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 512 512"><title>ionicons-v5-i</title><circle cx="184" cy="232" r="24"/><path d="M256.05,384c-45.42,0-83.62-29.53-95.71-69.83A8,8,0,0,1,168.16,304H343.85a8,8,0,0,1,7.82,10.17C339.68,354.47,301.47,384,256.05,384Z"/><circle cx="328" cy="232" r="24"/><circle cx="256" cy="256" r="208" style="fill:none;stroke-miterlimit:10;stroke-width:20px"/></svg>
        `,
          )
          // require to get it in runtime when the dom tree has changed
          const emojiTrigger = document.getElementById('emoji-trigger')
          emojiTrigger.addEventListener('mouseenter', showEmojiPicker)
          emojiTrigger.addEventListener('mousemove', showEmojiPicker)
          emojiTrigger.addEventListener('mouseleave', scheduleDismissEmojiPicker)
        }
      }
    }
  }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback)

  // Start observing the target node for configured mutations
  // this observer don't need to disconnect
  observer.observe(targetNode, config)
}

// handle dark mode
registerDarkModeHandling()

// handle font
registerFontHandling()

// handle isSubpixel
registerBooleanStyleSheet('isSubpixel', {
  css: `
* {
    -webkit-font-smoothing: subpixel-antialiased;
}
  `,
})

// handle isBorderless
registerBooleanStyleSheet('isBorderless', {
  css: `
* {
    border: 0 !important;
}

.ConversationView > .front > .NavigationBar,
.ConversationView > .front > .NavigationBar + .WelcomeView {
    background-color: rgb(245, 245, 245);
}

input[type=text],
input[type=search],
input[type=textarea] {
  background-color: rgb(245, 245, 245);
}
  `,
})

// handle isBoldUsername
registerBooleanStyleSheet('isBoldUsername', {
  css: `
.RecentMessageView>.items .item>.content .subject,
.Avatar > .texts > .displayName,
.TopBar > .Me > .Avatar .displayName,
.MessageViewItem.bubble > div.body > div.whoWhatWhen > div.who .displayName {
    font-weight: bold;
}
  `,
})

// handle isBubbleDisplayDate
registerBooleanStyleSheet('isBubbleDisplayDate', {
  css: `
.MessageViewItem.bubble > div.head {
    background: unset;
    margin-bottom: 8px;
}

.MessageViewItem.bubble > div.head > .displayDate {
    background-color: rgb(230, 234, 238);
    padding: 4px 16px;
    border-radius: 20px;
    font-weight: 700;
    color: black;
}
  `,
})

// handle docking badge
registerBadgeHandling()

// handle recommended settings
registerResetRecommendedSettings()

// handle emoji features
registerEmojiHandling()
