const electron = require('electron');
const { app, BrowserWindow, Tray, nativeImage } = electron;
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow, tray;

function createTray (){
  const image = nativeImage.createFromPath(
    path.join(__dirname, "/trayTemplate@2x.png")
  );
  tray = new Tray(image.resize({ width: 16, height: 16 }));
  tray.setToolTip('white-pic');

  tray.on('click', e => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
}

function createWindow() {
  
  !isDev && createTray();
  
  mainWindow = new BrowserWindow({    
    icon: `${__dirname}/assets/images/favicon.png`,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
      // devTools: isDev
    },
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => (mainWindow = null));     
}
app.allowRendererProcessReuse = false;

app.whenReady().then(() => {
  createWindow();
  app.setAppUserModelId('dev.woadudakand.white-pic');
});

// app.on('ready', () => {
//   // console.log(performanceInit());
//   createWindow();
//   app.setAppUserModelId('com.sovware.hrm');
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
