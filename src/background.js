import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';

const isDevelopment = process.env.NODE_ENV !== 'production';

let window;

protocol.registerSchemesAsPrivileged([{
    scheme: 'app',
    privileges: {
        secure: true,
        standard: true
    }
}]);

function handleTopMenu () {
    Menu.setApplicationMenu(null);
}

function createWindow () {
    window = new BrowserWindow({
        width: 540,
        height: 697,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        window.loadURL(process.env.WEBPACK_DEV_SERVER_URL).then(() => console.log('success'));
        if (!process.env.IS_TEST) {
            window.webContents.openDevTools();
        }
    } else {
        createProtocol('app');
        window.loadURL('app://./index.html').then(() => console.log('success'));
    }

    // handleTopMenu();

    window.on('closed', () => {
        window = null;
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});

app.on('ready', async () => {
   // if (isDevelopment && !process.env.IS_TEST) {
   //     try {
   //         await installVueDevtools();
   //     } catch (e) {
   //         console.error('VueDevtools failed to install: ', e.toString());
   //     }
   // }
   createWindow();
});

ipcMain.on('resizeWindow', (event, arg) => {
    window && window.setSize(arg.width, arg.height);
});

if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', d => {
            if (d === 'graceful-exit') {
                app.quit();
            }
        });
    } else {
        process.on('SIGTERM', () => {
            app.quit();
        })
    }
}
