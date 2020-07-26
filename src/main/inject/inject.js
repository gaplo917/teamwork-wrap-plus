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

  registerBooleanStyleSheet('isJFOpen', {
    css: `
@font-face {
  font-family: 'JFOpen';
  font-display: swap;
  src: url('https://cdn.jsdelivr.net/gh/justfont/open-huninn-font@v1.1/font/jf-openhuninn-1.1.ttf') format('truetype');
}
* {
  font-family: 'JFOpen', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
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
