const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 150,
    height: 150,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    
    webPreferences: {
            nodeIntegration:true,
            contextIsolation:false
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
// mover ventana desde renderer
ipcMain.on("move-window",(event,data)=>{

    const pos = win.getPosition()

    win.setPosition(
        pos[0] + data.x,
        pos[1] + data.y
    )

})