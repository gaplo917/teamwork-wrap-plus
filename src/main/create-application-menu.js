import { Menu } from 'electron'

export function createApplicationMenu({ themeItems, downloadItems }) {
  const template = []

  if (process.platform === 'darwin') {
    template.push({ role: 'appMenu' })
  }

  template.push(
    { role: 'fileMenu' },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
    {
      label: 'Theme',
      submenu: [...themeItems],
    },
    {
      label: 'Download',
      submenu: [...downloadItems],
    },
  )

  return Menu.buildFromTemplate(template)
}
