import { Menu } from 'electron'

export function createApplicationMenu({ themeItems }) {
  const template = [
    { role: 'appMenu' },
    { role: 'fileMenu' },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
    {
      label: 'Theme',
      submenu: [...themeItems],
    },
  ]

  return Menu.buildFromTemplate(template)
}
