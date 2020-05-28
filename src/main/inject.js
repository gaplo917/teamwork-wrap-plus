console.log('runner custom script');

const electron = require('electron');
const ipc = electron.ipcRenderer;
let lastTitle = '';

// just in case the notification hook not working
setInterval(() => updateBadge(), 5000)

function updateBadge() {
    const title = window.document.title

    if(lastTitle !== title) {
        lastTitle = title
        const matches = window.document.title.match(/\d+/)
        const count = matches === null ? 0 : matches.join('')

        ipc.send('badge', { count })

        console.log('Updated badge...', count);
    }
}

class NotificationWrapper extends window.Notification {
    constructor(title, options) {
        super(title, options);
        // wait next frame to update
        requestAnimationFrame(() => updateBadge())
    }
}

window.Notification = NotificationWrapper
