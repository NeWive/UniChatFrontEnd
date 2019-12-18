import path from 'path';
export function genPath (dir) {
    return path.join(__dirname, `../../../../../../data/${dir}`);
}
