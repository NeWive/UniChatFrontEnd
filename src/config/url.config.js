const server = 'http://47.102.140.37:10010';

export const interfaceGroup = {
    signUp: {
        url: `${server}/signup`,
    },
    captcha: {
        url: `${server}/captcha`,
    },
    signIn: {
        url: `${server}/signin`
    },
    modifyInfo: {
        url: `${server}/modify`
    },
    createGroup: {
        url: `${server}/createGroup`
    },
    getInviteCode: {
        url: `${server}/getInviteCode`
    },
    getUserInfo: {
        url: `${server}/userInfo`
    }
};
