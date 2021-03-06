const {app, BrowserWindow} = require('electron')
let mainWindow
function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: 'VFConnect',
    icon: 'resources/images/app.png',
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('main.html')
  mainWindow.on('closed', function (){
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function (){
  if (process.platform !== 'darwin'){
    app.quit()
  }
})
app.on('activate', function (){
  if (mainWindow === null){
    createWindow()
  }
})