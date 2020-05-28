# Introduction
Simple Electron wrapper for https://teamwork.gtomato.com/

### Features
* [x] Native Badges
* [x] Open Link to external URL
* Local Lock

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
