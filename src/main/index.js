import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as open from 'open'
import * as fs from 'fs'

const isDevelopment = process.env.NODE_ENV !== 'production'
const injectCode = fs.readFileSync(path.join(__dirname + '/inject.js'), 'utf8')

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

async function createMainWindow() {
  const window = new BrowserWindow({
    width: 1024,
    height: 1024,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: false,
      allowRunningInsecureContent: true,
    },
  })

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  window.webContents.on('dom-ready', () => {
    // `;0` is useful, ref: https://github.com/electron/electron/issues/23722
    return window.webContents.executeJavaScript(`${injectCode};0`)
  })

  window.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    return open(url)
  })

  ipcMain.on('badge', (event, data) => {
    const { count } = data
    if (count === 0) {
      app.dock.setBadge('')
    } else {
      app.dock.setBadge(`${count}`)
    }
  })

  await window.loadURL('https://teamwork.gtomato.com/')

  return window
}
// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})

app.allowRendererProcessReuse = true
