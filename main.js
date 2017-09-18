const {app, BrowserWindow, ipcMain, Tray, nativeImage} = require('electron')
const path = require('path')

const assetsDir = path.join(__dirname, 'assets')

let tray = undefined
let window = undefined


app.on('ready', () => {

  let icon = nativeImage.createFromDataURL(base64Icon)
  tray = new Tray(icon)


  tray.on('click', function(event) {
    toggleWindow()

    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({mode: 'detach'})
    }
  })


  window = new BrowserWindow({
    width: 300,
    height: 350,
    show: false,
    frame: false,
    resizable: false,
  })
  
//DSCIORD.JS
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');

  window.loadURL(`file://${path.join(__dirname, 'index.html')}`)

  window.on('blur', () => {
    if(!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
})

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow()
  }
}

const showWindow = () => {
  const trayPos = tray.getBounds()
  const windowPos = window.getBounds()
  let x, y = 0
  if (process.platform == 'darwin') {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
    y = Math.round(trayPos.y + trayPos.height)
  } else {
    x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
    y = Math.round(trayPos.y + trayPos.height * 10)
  }


  window.setPosition(x, y, false)
  window.show()
  window.focus()
}

ipcMain.on('show-window', () => {
  showWindow()
})

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Tray Icon as Base64 so tutorial has less overhead
let base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkVEQ0Q5OTk5NDE0MTFFNzgzNTRENDZGOEQxMjk0OUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkVEQ0Q5OUE5NDE0MTFFNzgzNTRENDZGOEQxMjk0OUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RURDRDk5Nzk0MTQxMUU3ODM1NEQ0NkY4RDEyOTQ5QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RURDRDk5ODk0MTQxMUU3ODM1NEQ0NkY4RDEyOTQ5QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgwR/9kAAAW9SURBVHjaxFdLbxtVFL73zoxnbCdN3cROE9eFtBVV6kh9qYBUoIuyKFHFBgQlUF4buiriFyB2LFiwRYI+oOWxQgIFIZAildINbVMQbYMIkfqiSUQTx2mc2J6593DOnRl77Di0FUVYGTueufd+5/Gd7xxzAGD/x8ukt6mREbZ47RrjprlsAccLOGeKG1zhN+7fBrzHGdBzbTmnd8EU4Eom8Esrd0ApZnd1sezgoA9MoHOXLjERiy1DldziwAXnoECABPwMH+mzoW4IQhpoGZkCzKS1rNEA8DyWzOXqHpOnBBoC+14KJoXJDQQylKd8kNYRiYRP40huohE2N5gE2h+CgxCMW1YduPkgiVtAGNxQrvYQ9F1+x7yFAAZIRqCewGhhFuh7c+hFK1CF3pqyCkznit8zcSC4TDSc9tOZ/J+AKbzkqaVcdj+4rsHBo3M5ObMCsLaMm9JtWWBEDHBdxqBGp/r/yFaFz2hNK3BKGXKdLysnuqOEgWWggDX5SodxJIWTzW40E0mnfOvWhDs7UxaaJFwD2mtSttOb3eHOzxfLf964DFLWSBSeT6VGjoVUMFlQp5SLZhKA9JidyWQ7tm4bJPdUueIlN/Q9a3Wl80Yi0asZXKkUvLnCmCwtXk1u2ria7dwxVDh79nj55s1xbhg1r9EpJiMkNcPcajWIUgDDZybb4j3PHfgSPPe2aZlZK5XaTKWn0CN67ruDe0TffoqMOzt7XrpeW+/zB165/tGHeW9+fp4F4L7nClCI6sAYf20RRFJOIVydH3g63p3epYLcqjDPK7ysNWt26gRgmNv7+5+ZOXPmqGjwGnyxo5KO6FkDJYQVY6vy+dco3JpY5GXo4bLi50FqpH/h+rb8lle1IDVQta5kopUCgScpt+ucnrWPg+vVDidPBIY6qula9QLlIxKGBtiZ7kft7syGmsERiYEQGJpkiRbH1+cew8MSJOwEqqrV29PD3xy6cfLkIBJnVASAlcnJC9dPnHhqenj4EK3RWo17uG3H4rn1exqBMYV+3XCfXM2Vi5vt3uxuCLqMgZ4WL/z86eyPpz8IDi7lDh48RUv/Ghl5a2Fs7BSFNJbJbE/t2vUGMl2H2OntfQTXH22KaiTHDU0EdNiszs6toFQkpIajc0kiaFmJSKjjOo+UCsN0IFIVWAX9IlLPTLdVbGR4SpgsThHggSLxmG2Y8Xg6BKbPVQMDL1dnZsaqs4UrXXueeMePErD03r3vI+DbCPJge37LS1oRgnBjrWfQCUNVKpJh/mlHjEmNY9bUL2jyoD2KJUQ8ntGKBlwVfx//Itnd9fDaffvepc26rAJ5jKXTm9cNvfA5rfWKc9OFy2OfxNb3vZhMtfcgaCeKiE0tv7mDaWCcLVCzBNf9FMVElRYWSxMTJ1Lbtx1mhhQVZbXPfjvyejK1alOy74Enrc6uAcNxMhRg9GbOKxb/WLx69fu5a5M/ydzmg5k+pydhmGzht7FjcnGxzIRoPfoYDOrlRnlUSk5//dWb1ampX1bv2H64s3/jfp7p2V347Fh/4czpI0ZbGxe200ExReAFVSq5XqIjKQaHRtO5zodiS4WL08Mj782fO3u8FWi9SXA/Xx5WF80ONCkQOWZO/3CkeGH043g2u41RyIoz01gmWFouyHJlzt+LhiKBzGqpFDv/3VBplKnC1OSvXqnkaWJxvjIweYuzAk1JHHiQBtwgCKRS8RbGx8+xQAp1NdBfRIPD9dUrE+c1wQNBueOU6RMdMNcAVTC5w726gNKctEK4lp9m3fW8IhoaNrULHGLLYDDB/tuXaJ4WLCwgvMmXwBTsrka8+wBcA+cSA65gSVmmi0zjwcL7aYRZa2ckCmF38UsMbMZlRRliCYSDhsgYXiKY6P1h/d5MibZXDWyn0yyBE36jrvpr23C6kaQTyrCQ9abBZW0SsIW6p2GUQJ3u7kCj7/pHW300CkdC41/E/m8BBgAEQs5wzDOMzQAAAABJRU5ErkJggg=='