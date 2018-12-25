import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('dist/renderer/index.html');
  mainWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
  app.quit();
});
