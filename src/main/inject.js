console.log('runner custom script');
const darkReaderScript = document.createElement('script');
darkReaderScript.setAttribute('type', 'text/javascript')
darkReaderScript.setAttribute('src', 'https://unpkg.com/darkreader@4.9.15/darkreader.js')
darkReaderScript.onload = () => {
    DarkReader.enable({
        brightness: 150,
        contrast: 105,
        sepia: 0,
        grayscale: 0
    }, {
        css: `
    .MessageBubble .arrow.left svg {
        display: none !important;
    }
    .RecentMessageView > .items .item > .content .subject {
        color: rgba(255, 255, 255, 1);
    }
    .RecentMessageView > .items .item > .content .what, .RecentMessageView > .items .item > .content .who, .RecentMessageView > .items .item > .extra .when  {
        color: rgba(255, 255, 255, 0.6);
    }
    .LeftBar > .ListView .items .ReactVirtualized__List .item {
        border-bottom-color: rgba(255, 255, 255, 0.1);
    }
    .ConversationView > .front > .NavigationBar {
        border-bottom-color: rgba(255, 255, 255, 0.1);
    }
`
    });
}
document.head.appendChild(darkReaderScript)


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
