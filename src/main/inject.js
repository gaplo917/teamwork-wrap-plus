console.debug('running injected script')
const electron = require('electron')
const ipc = electron.ipcRenderer

function registerDarkModeHandling() {
  console.debug('registerDarkModeHandling')

  const darkReaderScript = document.createElement('script')
  darkReaderScript.setAttribute('type', 'text/javascript')
  darkReaderScript.setAttribute('src', 'https://unpkg.com/darkreader@4.9.15/darkreader.js')

  const toggleDarkMode = isDark => {
    if (isDark) {
      DarkReader.enable(
        {
          brightness: 150,
          contrast: 105,
          sepia: 0,
          grayscale: 0,
        },
        {
          css: `
            .MessageBubble .arrow.left svg {
                display: none !important;
            }
            .RecentMessageView > .items .item > .content .subject {
                color: rgba(255, 255, 255, 1);
            }
            .RecentMessageView > .items .item > .content .what, .RecentMessageView > .items .item > .content .who, .RecentMessageView > .items .item > .extra .when  {
                color: rgba(255, 255, 255, 0.6);
            }
            .InputBox > .TextArea .Editable:empty::before {
                color: rgba(255, 255, 255, 0.6);
            }
            .LeftBar > .ListView .items .ReactVirtualized__List .item {
                border-bottom-color: rgba(255, 255, 255, 0.1);
            }
            .ConversationView > .front > .NavigationBar {
                border-bottom-color: rgba(255, 255, 255, 0.1);
            }
            .LeftBar > .Switcher {
                border-top-color: rgba(255, 255, 255, 0.1);
            }
            .ConversationView > .front  {
                border-left-color: rgba(255, 255, 255, 0.1);
                border-right-color: rgba(255, 255, 255, 0.1);
            }
            .ChatView > .InputBox {
                border-top-color: rgba(255, 255, 255, 0.1);
            }
            .InputBox > .TextArea .Editable {
                border-top-color: rgba(255, 255, 255, 0.1);
                border-left-color: rgba(255, 255, 255, 0.1);
                border-right-color: rgba(255, 255, 255, 0.1);
                border-bottom-color: rgba(255, 255, 255, 0.1);
            }
        `,
        },
      )
    } else {
      DarkReader.disable()
    }
  }

  darkReaderScript.onload = () => {
    const isDark = (window.localStorage.getItem('theme') || '1') === '1'
    toggleDarkMode(isDark)
  }

  // add script to DOM
  document.head.appendChild(darkReaderScript)

  // listen theme changed
  ipc.on('toggle-dark-mode', () => {
    const isDark = (window.localStorage.getItem('theme') || '1') === '1'
    if (isDark) {
      window.localStorage.setItem('theme', '0')
      toggleDarkMode(false)
    } else {
      window.localStorage.setItem('theme', '1')
      toggleDarkMode(true)
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

  const remote = electron.remote
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
registerBadgeHandling()
registerRightClickMenuHandling()
