const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', () => {
  let n = new Notification('Welcome', {
    body: 'See your notifications, here!'
  })

  // Tell the notification to show the menubar popup window on click
  n.onclick = () => { ipcRenderer.send('show-window') }

})
