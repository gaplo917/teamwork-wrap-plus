import { app, BrowserWindow, ipcMain, Menu, MenuItem } from 'electron'
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
      enableRemoteModule: true,
      allowRunningInsecureContent: true,
    },
  })

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.on('minimize', function (event) {
    event.preventDefault()
    window.hide()
  })

  window.on('close', function (event) {
    event.preventDefault()
    window.hide()

    return false
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
    event.preventDefault()
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

  window.webContents.on('context-menu', (event, params) => {
    const menu = new Menu()

    // Add each spelling suggestion
    for (const suggestion of params.dictionarySuggestions) {
      menu.append(
        new MenuItem({
          label: suggestion,
          click: () => window.webContents.replaceMisspelling(suggestion),
        }),
      )
    }

    // Allow users to add the misspelled word to the dictionary
    if (params.misspelledWord) {
      menu.append(
        new MenuItem({
          label: 'Add to dictionary',
          click: () => window.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord),
        }),
      )
    }

    menu.popup()
  })

  await window.loadURL('https://teamwork.gtomato.com/')

  return window
}

function createApplicationMenu() {
  const isMac = process.platform === 'darwin'

  const template = [
    // { role: 'appMenu' }
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: 'about' },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideothers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' },
            ],
          },
        ]
      : []),
    // { role: 'fileMenu' }
    {
      label: 'File',
      submenu: [isMac ? { role: 'close' } : { role: 'quit' }],
    },
    // { role: 'editMenu' }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac
          ? [
              { role: 'pasteAndMatchStyle' },
              { role: 'delete' },
              { role: 'selectAll' },
              { type: 'separator' },
              {
                label: 'Speech',
                submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }],
              },
            ]
          : [{ role: 'delete' }, { type: 'separator' }, { role: 'selectAll' }]),
      ],
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac
          ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }]
          : [{ role: 'close' }]),
      ],
    },
    {
      label: 'Theme',
      submenu: [
        {
          label: 'Toggle Dark Mode',
          click: () => {
            mainWindow.webContents.send('theme', {})
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

createApplicationMenu()

// close all window before user trigger quit
app.on('before-quit', () => {
  mainWindow.removeAllListeners('close')
  mainWindow.close()
})

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', async () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = await createMainWindow()
  } else {
    mainWindow.show()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
  mainWindow = await createMainWindow()
})

app.allowRendererProcessReuse = true
