const {app, BrowserWindow} = require('electron');
const path = require('path')

function initialBrowserWindow() {
    const newWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color:rgb(48, 48, 48), 
            symbolColor: rgb(212, 212, 212),
        },
        frame: false,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    newWindow.loadFile(path.join(__dirname, 'Renderer', 'HomeWindow', 'Home.html'))
};
app.on('ready',  () => {initialBrowserWindow});

