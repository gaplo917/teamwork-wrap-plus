# Introduction
Simple Electron wrapper for https://teamwork.gtomato.com/.

Also bring in some interesting UI enhancements. 

### Enhancement
* [x] Dark Mode
* [x] Native Badges
* [x] Emoji Keyboard
* [x] Border-less Setting
* [x] Bold Username Setting
* [x] Bubble Display Date Setting
* [x] Ping Fang HK Font Setting
* [x] Noto Sans HK Font Setting
* [x] JF Open Huninn Font setting
* [x] Subpixel Antialiased Font Rendering Setting
* [] Secure Local Lock
* [x] Draft Note Handling
* [x] Add useful shortcuts

### Catch up with Chrome Web Features
* [x] Open Link to external URL
* [x] Native Chrome Spell Check
* [x] Simulate Chrome Right click handling
* [x] Auto save downloaded file to ~/Download folder without prompting dialog


### Security
This project has spent extra efforts on achieving with the following electron settings that 
mitigated the risk of malicious code injection when `teamwork.gtomato.com` is compromised 
```js
  new BrowserWindow({
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
      preload: path.join(app.getAppPath(), '../main/preload.js'),
    },
  })
```



# Getting Started
> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

```bash
# Install
yarn install

# run application in development mode
yarn dev

# create production build. 
# You need a developer certificate and apple id account(check sample.env)
yarn dist:dir
```

# Code Signing
Code signing is hard. 

To build a smooth experience of a electron app to the end-user, developers
need to do [Notarize](https://developer.apple.com/documentation/xcode/notarizing_macos_software_before_distribution)
in order to pass through the Mac GateKeeper.

This project use `electron-notarize`. Details tutorial: https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
