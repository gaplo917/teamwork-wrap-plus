import { BrowserWindow, Menu, MenuItem, app } from 'electron'
import fs from 'fs'
import path from 'path'
import buildEditorContextMenu from 'electron-editor-context-menu'

import { openUrlHandler } from './open-url-handler'
import { config } from './config'

const isDevelopment = process.env.NODE_ENV !== 'production'

// brain-less copy https://stackoverflow.com/a/16684530/6763724
const getDirFilesRecursively = function (dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = dir + '/' + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getDirFilesRecursively(file))
    } else {
      /* Is a file */
      results.push(file)
    }
  })
  return results
}

export async function createMainWindow() {
  const window = new BrowserWindow({
    width: 1024,
    height: 1024,
    webPreferences: {
      // security reason on running remote website
      nodeIntegration: false,
      // security reason on running remote website
      allowRunningInsecureContent: false,
      // security reason on running remote website
      enableRemoteModule: false,
      // Create a browser window with a sandboxed renderer.
      // With this option enabled, the renderer must communicate via IPC to the main process in order to access node APIs.
      // https://www.electronjs.org/docs/api/sandbox-option
      sandbox: true,
      contextIsolation: true,
      preload: path.join(app.getAppPath(), 'preload.js'),
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
    const injectDir = path.join(__dirname + '/inject')

    // create a placeholder
    await window.webContents.executeJavaScript(`window.injectedCode = { 'SVG': {}, 'CSS': {} };0`)

    getDirFilesRecursively(injectDir)
      .sort(file => (path.basename(file) === 'inject.js' ? 1 : -1)) // always be the last candidate to run
      .forEach(file => {
        const extName = path.extname(file)
        const filename = path.basename(file)
        const injectCode = fs.readFileSync(file, 'utf8')

        if (extName === '.css' || extName === '.svg') {
          // inject the css/svg into javascript variable
          window.webContents.executeJavaScript(
            `window.injectedCode['${extName.substring(1).toUpperCase()}']['${filename.replace(
              extName,
              '',
            )}'] = \`${injectCode}\`;`,
          )
        } else if (extName === '.js') {
          // `;0` is useful, ref: https://github.com/electron/electron/issues/23722
          window.webContents.executeJavaScript(`${injectCode};0`)
        }
      })
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

  window.webContents.on('context-menu', (event, params) => {
    // Only show the context menu in text editors.
    if (!params.isEditable) return

    const menu = buildEditorContextMenu()

    // The 'contextmenu' event is emitted after 'selectionchange' has fired but possibly before the
    // visible selection has changed. Try to wait to show the menu until after that, otherwise the
    // visible selection will update after the menu dismisses and look weird.
    setTimeout(function () {
      menu.popup(window)
    }, 30)
  })

  await window.loadURL(config.teamworkUrl)

  return window
}
