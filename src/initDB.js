// 这里，我们设置 NeDB 并将其指向我们的 userData 目录。
// 这个空间专门为我们的应用程序所保留，所以，我们可以确信，其他程序 或 与其他用户的交互不应该篡改这个文件空间。
// 至此，我们可以在 renderer 进程中导入 datastore.js 并使用它。
import Database from 'nedb';
import { genPath } from './module/genPath';

function errHandler (e) {
    console.log(e);
}

function createDB (dir) {
    return new Database({
        filename: genPath(dir),
        autoload: true,
        // onload: errHandler
    });
}

let db = {

};

db.userInfo = createDB('/user_info.db');
db.chatLog = createDB('/chat_log.db');

export default db;
