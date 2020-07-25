console.debug('running injected script')
const electron = require('electron')
const ipc = electron.ipcRenderer
const remote = electron.remote

class Storage {
  constructor() {
    const self = this
    this.onChangeHandlers = new Map()
    this.settings = new Proxy(
      {
        isDark: false,
        isBorderless: false,
        isBoldUsername: false,
        isBubbleDisplayDate: false,
        isPingFang: false,
        isNotoSans: false,
        isSubpixel: false,
      },
      {
        get(target, name, receiver) {
          console.debug(`Getting ${name}`)
          return (window.localStorage.getItem(name) || '1') === '1'
        },
        set(target, name, value, receiver) {
          const convertedValue = value ? '1' : '0'
          console.debug(`Settings ${name}=${convertedValue}`)
          window.localStorage.setItem(name, convertedValue)
          ipc.send('application-settings', JSON.stringify(self.getApplicationSettings()))
          const handlers = self.onChangeHandlers.get(name) || []
          handlers.forEach(it => it(value))
        },
      },
    )

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

function registerRightClickMenuHandling() {
  console.debug('registerRightClickMenuHandling')

  // `remote.require` since `Menu` is a main-process module.
  const buildEditorContextMenu = remote.require('electron-editor-context-menu')

  window.addEventListener('contextmenu', function (e) {
    // Only show the context menu in text editors.
    if (!e.target.closest('textarea, input, [contenteditable="true"]')) return

    const menu = buildEditorContextMenu()

    // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
    // visible selection has changed. Try to wait to show the menu until after that, otherwise the
    // visible selection will update after the menu dismisses and look weird.
    setTimeout(function () {
      menu.popup(remote.getCurrentWindow())
    }, 30)
  })
}

function registerResetRecommendedSettings() {
  ipc.on('reset-recommended-settings', () => {
    storage.settings.isDark = true
    storage.settings.isPingFang = true
    storage.settings.isBoldUsername = true
    storage.settings.isBorderless = true
    storage.settings.isBubbleDisplayDate = true
    storage.settings.isNotoSans = false
    storage.settings.isSubpixel = false
  })
}

registerDarkModeHandling()
registerBooleanStyleSheet('isPingFang', {
  css: `
* {
  font-family: 'PingFang HK', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}
  `,
})

// handle isNotoSans
registerBooleanStyleSheet('isNotoSans', {
  css: `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;400;700&display=swap');
* {
  font-family: 'Noto Sans HK', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
}
  `,
})
storage.on('isPingFang', value => {
  if (value) {
    storage.settings.isNotoSans = false
  }
})

storage.on('isNotoSans', value => {
  if (value) {
    storage.settings.isPingFang = false
  }
})

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
  `,
})

// handle isBoldUsername
registerBooleanStyleSheet('isBoldUsername', {
  css: `
.RecentMessageView>.items .item>.content .subject,
.Avatar > .texts > .displayName,
.TopBar > .Me > .Avatar .displayName {
    font-weight: 500;
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
    color: black;
}
  `,
})
registerBadgeHandling()
registerRightClickMenuHandling()
registerResetRecommendedSettings()
