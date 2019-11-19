// eslint-disable-next-line import/no-duplicates
import weChatLogo from '../assets/wechat.png';
// eslint-disable-next-line import/no-duplicates
import qqLogo from '../assets/tencent.png';
import username from '../assets/username.png';
import password from '../assets/password.png';
import verifyCode from '../assets/validate.png';
import email from '../assets/email.png';
import session from '../assets/svg/session.png';
import friend from '../assets/friends.png';
import friendsList from '../assets/friendsPanel.png';
import groupList from '../assets/groupsList.png';

export const logInList = [
    {
        placeholder: 'username',
        key: 'username',
        img: username,
        type: 'text'
    },
    {
        placeholder: 'password',
        key: 'password',
        img: password,
        type: 'password'
    },
    {
        placeholder: 'verify code',
        key: 'verifyCode',
        img: verifyCode,
        type: 'text'
    }
];

export const logInHyperLink = [
    {
        name: '注册新账号',
        key: 'registerList',
        to: '/main/register'
    },
    {
        name: '忘记密码',
        key: 'forgetPassword',
        to: '/main/forget_password'
    }
];

export const registerInHyperLink = [
    {
        name: '登陆',
        key: 'login',
        to: '/main/login'
    },
    {
        name: '忘记密码',
        key: 'forgetPassword',
        to: '/main/forget_password'
    }
];

export const forgetInHyperLink = [
    {
        name: '登陆',
        key: 'login',
        to: '/main/login'
    },
    {
        name: '注册新账号',
        key: 'registerList',
        to: '/main/register'
    }
];

export const logInMethodList = [
    {
        name: '微信登陆',
        key: 'logWithWeChat',
        img: weChatLogo
    },
    {
        name: 'QQ登陆',
        key: 'logWithQQ',
        img: qqLogo
    }
];

export let registerList = logInList.map((i) => (i));
let element = registerList.pop();
console.log(registerList);
registerList.push({
    placeholder: 'Email',
    key: 'email',
    img: email,
    type: 'text'
});
registerList.push(element);

export const windowControllerList = [
    {
       key: 'minimal'
    },
    {
        key: 'close'
    }
];

export const findBackPassword = [
    {
        placeholder: 'password',
        key: 'password',
        img: password,
        type: 'password'
    },
    {
        placeholder: 'repeat password',
        key: 'repeat_password',
        img: password,
        type: 'password'
    },
    {
        placeholder: 'Email',
        key: 'email',
        img: email,
        type: 'text'
    }
];

export const listGroup = [
    {
        name: '好友',
        key: 'friends',
        logo: friendsList,
        index: 1,
    },
    {
        name: '群聊',
        key: 'groups',
        logo: groupList,
        index: 2
    }
];

export const infoList = [
    {
        name: '邮箱',
        key: 'email'
    },
    {
        name: '账号',
        key: 'account'
    },
    {
        name: '个人介绍',
        key: 'description'
    }
];

export const mainControllerList = [
    {
        key: 'minimal'
    },
    {
        key: 'max'
    },
    {
        key: 'close'
    }
];

export const indexNavigatorList = [
    {
        key: 'session',
        to: '/index/session',
        logo: session
    },
    {
        key: 'friends',
        to: '/index/friends',
        logo: friend
    }
];

export let testMessage = [

];
export let externalMessage = [

];
for (let item = 0; item < 100; item++) {
    let time = new Date().getTime();
    item > 4 ? externalMessage.push({
        time: time,
        id: '123456',
        message: 'yingyingyuing' + item
    }) : testMessage.push({
        time: time,
        id: '123456',
        message: 'yingyingyuing' + item
    });
    item > 4 ? externalMessage.push({
        time: time,
        id: '738767136',
        message: 'yingyingyuing' + item
    }) : testMessage.push({
        time: time,
        id: '738767136',
        message: 'yingyingyuingyingyingyuingyingyingyuingyingyingyuingyingyingyuingyingyingyuingyingyingyuingyingyingyuing' + item
    });
}

let peopleEmoji = '😄 😆 😊 😃 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌ 👋 ✋ ✋ 👐 ☝ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭';
peopleEmoji = peopleEmoji.split(' ');
let natureEmoji = '☁ ❄ ⛄ ⚡ 🌀 🌁 🌊 🐱 🐶 🐭 🐹 🐰 🐺 🐸 🐯 🐨 🐻 🐷 🐽 🐮 🐗 🐵 🐒 🐴 🐎 🐫 🐑 🐘 🐼 🐍 🐦 🐤 🐥 🐣 🐔 🐧 🐢 🐛 🐝 🐜 🐞 🐌 🐙 🐠 🐟 🐳 🐋 🐬 🐄 🐏 🐀 🐃 🐅 🐇 🐉 🐐 🐓 🐕 🐖 🐁 🐂 🐲 🐡 🐊 🐪 🐆 🐈 🐩 🐾 💐 🌸 🌷 🍀 🌹 🌻 🌺 🍁 🍃 🍂 🌿 🍄 🌵 🌴 🌲 🌳 🌰 🌱 🌼 🌾 🐚 🌐 🌞 🌝 🌚 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌜 🌛 🌙 🌍 🌎 🌏 🌋 🌌 ⛅';
natureEmoji = natureEmoji.split(' ');
let objectEmoji = '🎍 💝 🎎 🎒 🎓 🎏 🎆 🎇 🎐 🎑 🎃 👻 🎅 🎄 🎁 🔔 🔕 🎋 🎉 🎊 🎈 🔮 💿 📀 💾 📷 📹 🎥 💻 📺 📱 ☎ ☎ 📞 📟 📠 💽 📼 🔉 🔈 🔇 📢 📣 ⌛ ⏳ ⏰ ⌚ 📻 📡 ➿ 🔍 🔎 🔓 🔒 🔏 🔐 🔑 💡 🔦 🔆 🔅 🔌 🔋 📲 ✉ 📫 📮 🛀 🛁 🚿 🚽 🔧 🔩 🔨 💺 💰 💴 💵 💷 💶 💳 💸 📧 📥 📤 ✉ 📨 📯 📪 📬 📭 📦 🚪 🚬 💣 🔫 🔪 💊 💉 📄 📃 📑 📊 📈 📉 📜 📋 📆 📅 📇 📁 📂 ✂ 📌 📎 ✒ ✏ 📏 📐 📕 📗 📘 📙 📓 📔 📒 📚 🔖 📛 🔬 🔭 📰 🏈 🏀 ⚾ 🎾 🎱 🎱 🏉 🎳 ⛳ 🚵 🚴 🏇 🏂 🏊 🏄 🎿 ♠ ♥ ♣ ♦ 💎 💍 🏆 🎼 🎹 🎻 👾 🎮 🃏 🎴 🎲 🎯 🀄️ 🎬 📝 📝 📖 🎨 🎤 🎧 🎺 🎷 🎸 👞 👡 👠 💄 👢 👕 👕 👔 👚 👗 🎽 👖 👘 👙 🎀 🎩 👑 👒 👞 🌂 💼 👜 👝 👛 👓 🎣 ☕ 🍵 🍶 🍼 🍺 🍻 🍸 🍹 🍷 🍴 🍕 🍔 🍟 🍗 🍖 🍝 🍛 🍤 🍱 🍣 🍥 🍙 🍘 🍚 🍜 🍲 🍢 🍡 🥚 🍞 🍩 🍮 🍦 🍨 🍧 🎂 🍰 🍪 🍫 🍬 🍭 🍯 🍎 🍏 🍊 🍋 🍒 🍇 🍉 🍓 🍑 🍈 🍌 🍐 🍍 🍠 🍆 🍅 🌽';
objectEmoji = objectEmoji.split(' ');
let placeEmoji = '🏠 🏡 🏫 🏢 🏣 🏥 🏦 🏪 🏩 🏨 💒 ⛪ 🏬 🏤 🌇 🌆 🏯 🏰 ⛺ 🏭 🗼 🗾 🗻 🌄 🌅 🌠 🗽 🌉 🎠 🌈 🎡 ⛲ 🎢 🚢 🚤 ⛵ 🚣 ⚓ 🚀 ✈ 🚁 🚂 🚊 🚞 🚲 🚡 🚟 🚠 🚜 🚙 🚘 🚗 🚗 🚕 🚖 🚛 🚌 🚍 🚨 🚓 🚔 🚒 🚑 🚐 🚚 🚋 🚉 🚆 🚅 🚄 🚈 🚝 🚃 🚎 🎫 ⛽ 🚦 🚥 ⚠ 🚧 🔰 🏧 🎰 🚏 💈 ♨ 🏁 🎌 🏮 🗿 🎪 🎭 📍 🚩 🇯🇵 🇰🇷 🇨🇳 🇺🇸 🇫🇷 🇪🇸 🇮🇹 🇷🇺 🇬🇧 🇬🇧 🇩🇪';
placeEmoji = placeEmoji.split(' ');
export const emojiList = {
    peopleEmoji,
    natureEmoji,
    objectEmoji,
    placeEmoji
}
