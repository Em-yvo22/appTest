const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

function initialBrowserWindow() {
    const newWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color:'#303030', 
            symbolColor: '#d4d4d4',
        },
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    newWindow.loadFile(path.join(__dirname, 'Renderer', 'HomeWindow', 'Home.html'))
};
app.on('ready',  () => {initialBrowserWindow()});

//Open a new window and close the current
function replaceWindow (event, newWindow){
    const currentWindow = BrowserWindow.getFocusedWindow();
    const replacement = new BrowserWindow({
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#303030',
            symbolColor: '#d4d4d4'
        },
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    replacement.loadFile(newWindow);
    currentWindow.close();
}
ipcMain.on('replace-window', replaceWindow)

//Open and close a sidebar
