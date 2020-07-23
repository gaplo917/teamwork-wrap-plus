import { app, ipcMain, Menu } from 'electron'
import { createApplicationMenu } from './create-application-menu'
import { createMainWindow } from './create-main-window'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

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

// listen badge update from renderer
ipcMain.on('badge', (event, data) => {
  const { count } = data
  if (count === 0) {
    app.dock.setBadge('')
  } else {
    app.dock.setBadge(`${count}`)
  }
})

ipcMain.on('application-settings', (event, data) => {
  const settings = JSON.parse(data)
  const menu = createApplicationMenu({
    settings,
    onToggleDarkMode: () => {
      mainWindow.webContents.send('toggle-dark-mode', {})
    },
    onTogglePingFang: () => {
      mainWindow.webContents.send('toggle-ping-fang', {})
    },
    onToggleSubpixel: () => {
      mainWindow.webContents.send('toggle-subpixel', {})
    },
  })

  Menu.setApplicationMenu(menu)
})
