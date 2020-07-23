console.debug('running injected script')
const electron = require('electron')
const ipc = electron.ipcRenderer
const remote = electron.remote

class Storage {
  constructor() {
    // send the application settings to main process for rendering the application menu
    ipc.send('application-settings', JSON.stringify(this.getApplicationSettings()))
    this.onChangeHandlers = new Map()
  }

  getApplicationSettings() {
    return {
      isDark: this.isDark,
      isPingFang: this.isPingFang,
      isNotoSansHK: this.isNotoSansHK,
      isSubpixel: this.isSubpixel,
    }
  }

  get isDark() {
    return (window.localStorage.getItem('theme') || '1') === '1'
  }

  get isPingFang() {
    return (window.localStorage.getItem('pingfang') || '0') === '1'
  }

  get isNotoSansHK() {
    return (window.localStorage.getItem('notosanshk') || '0') === '1'
  }

  get isSubpixel() {
    return (window.localStorage.getItem('subpixel') || '0') === '1'
  }

  set isDark(mode) {
    window.localStorage.setItem('theme', mode)
    ipc.send('application-settings', JSON.stringify(this.getApplicationSettings()))
    const handler = this.onChangeHandlers.get('isDark')
    handler && handler(mode)
  }

  set isPingFang(mode) {
    window.localStorage.setItem('pingfang', mode)
    ipc.send('application-settings', JSON.stringify(this.getApplicationSettings()))
    const handler = this.onChangeHandlers.get('isPingFang')
    handler && handler(mode)
  }

  set isNotoSansHK(mode) {
    window.localStorage.setItem('notosanshk', mode)
    ipc.send('application-settings', JSON.stringify(this.getApplicationSettings()))
    const handler = this.onChangeHandlers.get('isNotoSansHK')
    handler && handler(mode)
  }

  set isSubpixel(mode) {
    window.localStorage.setItem('subpixel', mode)
    ipc.send('application-settings', JSON.stringify(this.getApplicationSettings()))
    const handler = this.onChangeHandlers.get('isSubpixel')
    handler && handler(mode)
  }

  on(key, handler) {
    this.onChangeHandlers.set(key, handler)
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
    updateUI(storage.isDark)
  }

  // add script to DOM
  document.head.appendChild(darkReaderScript)

  storage.on('isDark', value => {
    updateUI(value === '1')
  })

  ipc.on('toggle-dark-mode', () => {
    if (storage.isDark) {
      storage.isDark = '0'
    } else {
      storage.isDark = '1'
    }
  })
}

function registerPingFangHandling() {
  const style = document.createElement('style')
  style.innerText = `
    * {
      font-family: 'PingFang HK', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    }
  `.trim()

  const updateUI = bool => {
    if (bool) {
      document.head.appendChild(style)
    } else {
      style.remove()
    }
  }

  updateUI(storage.isPingFang)

  storage.on('isPingFang', value => {
    updateUI(value === '1')
  })

  ipc.on('toggle-ping-fang', () => {
    if (storage.isPingFang) {
      storage.isPingFang = '0'
    } else {
      storage.isPingFang = '1'
      storage.isNotoSansHK = '0'
    }
  })
}

function registerNotoSansHKHandling() {
  const style = document.createElement('style')
  style.innerText = `
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;400;700&display=swap');
    * {
      font-family: 'Noto Sans HK', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Microsoft Yahei', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    }
  `.trim()

  const updateUI = bool => {
    if (bool) {
      document.head.appendChild(style)
    } else {
      style.remove()
    }
  }

  updateUI(storage.isNotoSansHK)

  storage.on('isNotoSansHK', value => {
    updateUI(value === '1')
  })

  ipc.on('toggle-noto-sans-hk', () => {
    if (storage.isNotoSansHK) {
      storage.isNotoSansHK = '0'
    } else {
      storage.isNotoSansHK = '1'
      storage.isPingFang = '0'
    }
  })
}

function registerSubpixelHandling() {
  const style = document.createElement('style')
  style.innerText = `
    * {
        -webkit-font-smoothing: subpixel-antialiased;
    }
  `.trim()

  const updateUI = bool => {
    if (bool) {
      document.head.appendChild(style)
    } else {
      style.remove()
    }
  }

  updateUI(storage.isSubpixel)

  storage.on('isSubpixel', value => {
    updateUI(value === '1')
  })

  ipc.on('toggle-subpixel', () => {
    if (storage.isSubpixel) {
      storage.isSubpixel = '0'
    } else {
      storage.isSubpixel = '1'
    }
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

registerDarkModeHandling()
registerPingFangHandling()
registerNotoSansHKHandling()
registerSubpixelHandling()
registerBadgeHandling()
registerRightClickMenuHandling()
