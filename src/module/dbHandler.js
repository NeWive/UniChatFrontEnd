import path from 'path';
import axios from 'axios';
import fs from 'fs';
import { remote } from 'electron';

// function createUserDir (path, uid) {
//     console.log(path);
//     // fs.readdir(path, (err, files) => {
//     //     if (err) {
//     //         console.log(err);
//     //     }
//     //     if (!files.includes(uid)) {
//     //         fs.mkdirSync(`./${uid}`);
//     //     }
//     // });
// }

function toBuffer (ab) {
    let buf = Buffer.alloc(ab.byteLength);
    let view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

export async function cacheUserInfo (avatar, nickname, uid) {
    try {
        let storagePath = path.join(__dirname, `../../../../../../data/`);
        let files = fs.readdirSync(storagePath);
        if (!files.includes(uid)) {
            storagePath = path.join(storagePath, `./${uid}`);
            fs.mkdirSync(storagePath);
            let { data } = await axios({
                method: 'GET',
                url: avatar,
                responseType: 'arraybuffer'
            });
            let buffer = toBuffer(data);
            const imgPath = `${storagePath}/avatar.png`;
            fs.writeFileSync(imgPath, buffer, 'binary');
            return {
                nickname,
                uid,
                avatar: path.join(storagePath, `avatar.png`)
            };
        }
    } catch (e) {
        console.log(e);
        return {
            nickname,
            uid,
            avatar
        };
    }
}

export async function getValidUid (uid) {
    return Number(uid);
}
