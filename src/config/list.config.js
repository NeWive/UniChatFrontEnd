import weChatLogo from '../assets/wechat.png';
import qqLogo from '../assets/tencent.png';
import username from '../assets/username.png';
import password from '../assets/password.png';
import verifyCode from '../assets/validate.png';
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
        to: '/main/find_back'
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
    img: '../../assets/email.png',
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

export const listGroup = [
    {
        name: '好友',
        key: 'friends'
    },
    {
        name: '群聊',
        key: 'groups'
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
