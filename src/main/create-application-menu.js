import { Menu } from 'electron'

export function createApplicationMenu({ themeItems }) {
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
    })

  return Menu.buildFromTemplate(template)
}
