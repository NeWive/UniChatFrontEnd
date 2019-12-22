import path from 'path';
import axios from 'axios';
import fs from 'fs';

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

export async function cacheUserAvatar (uid, avatar) {
    try {
        let storagePath = path.join(__dirname, `../../../../../../data/`);
        let files = fs.readdirSync(storagePath);
        storagePath = path.join(storagePath, `./${uid}`);
        console.log(storagePath);
        console.log(files);
        console.log(uid);
        if (files.indexOf(`${uid}`) === -1) {
            fs.mkdirSync(storagePath);
        }
        let { data } = await axios({
            method: 'GET',
            url: avatar,
            responseType: 'arraybuffer'
        });
        let buffer = toBuffer(data);
        const imgPath = `${storagePath}/avatar.png`;
        let childFiles = fs.readdirSync(storagePath);
        console.log(childFiles);
        if (childFiles.indexOf('avatar.png') === -1) {
            fs.unlinkSync(path.resolve(storagePath, 'avatar.png'));
        }
        fs.writeFileSync(imgPath, buffer, 'binary');
    } catch (e) {
        console.log(e);
    }
}

export async function getValidUid (uid) {
    return Number(uid);
}
