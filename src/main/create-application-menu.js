import { app, Menu } from 'electron'

export function createApplicationMenu(
  { settings, onToggleDarkMode, onTogglePingFang, onToggleNotoSansHK, onToggleSubpixel } = { settings: {} },
) {
  const isMac = process.platform === 'darwin'

  const toggleAction = bool => (bool ? 'Disable' : 'Enable')

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
          label: `${toggleAction(settings.isDark)} Dark Mode`,
          click: () => {
            onToggleDarkMode && onToggleDarkMode()
          },
        },
        {
          label: `${toggleAction(settings.isPingFang)} PingFang HK`,
          click: () => {
            onTogglePingFang && onTogglePingFang()
          },
        },
        {
          label: `${toggleAction(settings.isNotoSansHK)} Noto Sans HK`,
          click: () => {
            onToggleNotoSansHK && onToggleNotoSansHK()
          },
        },
        {
          label: `${toggleAction(settings.isSubpixel)} subpixel-antialiased`,
          click: () => {
            onToggleSubpixel && onToggleSubpixel()
          },
        },
      ],
    },
  ]

  return Menu.buildFromTemplate(template)
}
