import {app,BrowserWindow} from 'electron'

let win = null

function createWindow(){
    // Initialize the window to our specified dimensions
    win = new BrowserWindow({width: 800, height: 600});

    // Specify entry point
    win.loadURL('https://teateamsoft.github.io/app-vfc/');

    // Show dev tools
    // Remove this line before distributing
    win.webContents.openDevTools()

    // Remove window once app is closed
    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', function () {
    createWindow()
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit()
    }
})