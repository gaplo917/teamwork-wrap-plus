import { BrowserWindow, Menu, MenuItem } from 'electron'
import fs from 'fs'
import path from 'path'

import { openUrlHandler } from './open-url-handler'
import { config } from './config'

const isDevelopment = process.env.NODE_ENV !== 'production'

export async function createMainWindow() {
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

  window.on('minimize', function (event) {
    event.preventDefault()
    window.hide()
  })

  window.on('close', function (event) {
    event.preventDefault()
    window.hide()

    return false
  })

  window.webContents.on('dom-ready', async () => {
    const injectCode = fs.readFileSync(path.join(__dirname + '/inject/inject.js'), 'utf8')
    const darkModeFixes = fs.readFileSync(path.join(__dirname + '/inject/dark-mode-fixes.css'), 'utf8')
    // inject the css
    await window.webContents.executeJavaScript(`const darkModeFixes = \`${darkModeFixes}\`;`)

    // `;0` is useful, ref: https://github.com/electron/electron/issues/23722
    await window.webContents.executeJavaScript(`${injectCode};0`)
  })

  window.webContents.on('new-window', openUrlHandler)

  window.webContents.on('will-navigate', openUrlHandler)

  window.webContents.on('will-redirect', openUrlHandler)

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

  await window.loadURL(config.teamworkUrl)

  return window
}
