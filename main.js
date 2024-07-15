import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 640
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})