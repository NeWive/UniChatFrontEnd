import path from 'path';
import { remote } from 'electron';

export function genPath (dir) {
    return path.join(remote.app.getPath('userData'), '/data.db');
}
