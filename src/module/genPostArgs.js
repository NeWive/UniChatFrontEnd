import forge from 'node-forge';

const mapToRegister = {
    username: 'nickname',
    password: 'password',
    email: 'emailAddr',
    verifyCode: 'captcha'
};

const mapToFindBackForm = {
    password: 'password',
    email: 'email'
};

const mapToLogIn = {
    username: 'uid',
    password: 'passwordHash',
    verifyCode: 'captcha'
};

const mapToUserInfo = {
    username: 'uid',
};

const mapToAvatar = {
    avatar: 'avatar'
};

const mapKey = {
    'findback': mapToFindBackForm,
    'register': mapToRegister,
    'login': mapToLogIn,
    'userInfo': mapToUserInfo,
    'avatar': mapToAvatar
};

// export function genFindBackArgs (obj) {
//     let result = {};
//     for (let item in obj) {
//         if (obj.hasOwnProperty(item) && mapToFindBackForm.hasOwnProperty(item)) {
//             result[mapToFindBackForm[item]] = obj[item];
//         }
//     }
//     return result;
// }
//
// export function genRegisterArgs (obj) {
//     let result = {};
//     for (let item in obj) {
//         if (obj.hasOwnProperty(item)) {
//             result[mapToRegister[item]] = obj[item];
//         }
//     }
//     return result;
// }

export function genArgs (obj, key) {
    let result = {};
    for (let item in obj) {
        if (obj.hasOwnProperty(item) && mapKey[key].hasOwnProperty(item)) {
            result[mapKey[key][item]] = obj[item];
        }
    }
    if (key === 'login') {
        let sha = forge.md.sha256.create();
        sha.update(result['passwordHash']);
        let resultMiddle = sha.digest().toHex();
        sha = forge.md.sha256.create();
        sha.update(resultMiddle + result.captcha);
        result.passwordHash = sha.digest().toHex();
    }
    return result;
}

export function genModifyArgs (key, value) {
    return {
        colName: key,
        newVal: value
    };
}
