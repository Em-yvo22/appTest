const {app, BrowserWindow, ipcMain, BaseWindow} = require('electron');
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
            symbolColor: '#d4d4d4'},
        backgroundColor: '#303030',
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    replacement.loadFile(newWindow);
    if (currentWindow.isMaximized()){
        replacement.maximize()
    }
    currentWindow.close();
}
ipcMain.on('replace-window', replaceWindow)

/*
Create a function that:
    sends an ipc message to the main process - PRELOAD ipcRenderer.send
    process the parameters (open a file) 
    send message back to renderer
    Content of the requested view is fetched
    contents inserted into a div element
*/
