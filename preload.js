const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('createButtonAPI', {
    replaceWindow: (newWindow) => {
        ipcRenderer.send('replace-window', newWindow)
    }
});

