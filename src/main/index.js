import { app, ipcMain, Menu } from 'electron'
import electronDl from 'electron-dl'
import { createApplicationMenu } from './create-application-menu'
import { createMainWindow } from './create-main-window'

// https://github.com/sindresorhus/electron-dl
electronDl({
  openFolderWhenDone: true,
})

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
  const toggleAction = bool => (bool ? '🟢' : '🔴')
  const createToggleItem = (key, label) => {
    return {
      label: `${toggleAction(settings[key])} ${label}`,
      click: () => {
        mainWindow.webContents.send(key, {})
      },
    }
  }

  const isMac = process.platform === 'darwin'

  const menu = createApplicationMenu({
    themeItems: [
      createToggleItem('isDark', 'Dark Mode'),
      createToggleItem('isBorderless', 'Border-less Mode'),
      createToggleItem('isBoldUsername', 'Bold Username'),
      createToggleItem('isBubbleDisplayDate', 'Bubble Display Date'),
      ...(isMac ? [createToggleItem('isPingFang', 'Ping Fang HK Font')] : []),
      createToggleItem('isNotoSans', 'Noto Sans HK Font'),
      createToggleItem('isJFOpen', 'JF Open Huninn Font'),
      createToggleItem('isSubpixel', 'Subpixel Antialiased Font Rendering'),
      {
        label: 'Reset to Recommended Settings',
        click: () => {
          mainWindow.webContents.send('reset-recommended-settings', {})
        },
      },
    ],
  })

  Menu.setApplicationMenu(menu)
})
