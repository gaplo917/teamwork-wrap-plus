const { ipcRenderer, contextBridge } = require('electron')

const allowedChannels = [
  'application-settings',
  'badge',
  'reset-recommended-settings',
  'isDark',
  'isBorderless',
  'isBoldUsername',
  'isBubbleDisplayDate',
  'isPingFang',
  'isNotoSans',
  'isJFOpen',
  'isSubpixel',
  'download',
]

contextBridge.exposeInMainWorld('TWW', {
  ipc: {
    on: (key, cb) => {
      if (allowedChannels.indexOf(key) === -1) {
        throw new Error(`Not supported channel '${key}', please add this channel to allowed list`)
      }
      ipcRenderer.on(key, cb)
    },
    send: (key, obj) => {
      if (allowedChannels.indexOf(key) === -1) {
        throw new Error(`'Not supported channel '${key}', please add this channel to allowed list`)
      }
      ipcRenderer.send(key, obj)
    },
  },
})
