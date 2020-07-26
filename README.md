# Introduction
Simple Electron wrapper for https://teamwork.gtomato.com/.

Also bring in some interesting UI enhancements. 

### Enhancement
* [x] Dark Mode
* [x] Native Badges
* [x] Add Border-less Setting
* [x] Add Bold Username Setting
* [x] Add Bubble Display Date Setting
* [x] Add Ping Fang HK Setting
* [x] Add Noto Sans HK Setting
* [x] Add JF Open Huninn setting
* [x] Add Subpixel antialiased font rendering setting
* [] Secure Local Lock

### Catch up with Chrome Web Features
* [x] Open Link to external URL
* [x] Native Chrome Spell Check
* [x] Simulate Chrome Right click handling


### Security
I have spent extra efforts on achieving with the following electron settings that 
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
# run application in development mode
yarn dev

# create production build
yarn dist:dir
```

# Code Signing
Code signing is hard. 

To build a smooth experience of a electron app to the end-user, developers
need to do [Notarize](https://developer.apple.com/documentation/xcode/notarizing_macos_software_before_distribution)
in order to pass through the Mac GateKeeper.

This project use `electron-notarize`. Details tutorial: https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
