const mapToRegister = {
    username: 'nickname',
    password: 'password',
    email: 'email',
    verifyCode: 'captcha'
};

const mapToFindBackForm = {
    password: 'password',
    email: 'email'
};

export function genFindBackArgs (obj) {
    let result = {};
    for (let item in obj) {
        if (obj.hasOwnProperty(item) && mapToFindBackForm.hasOwnProperty(item)) {
            result[mapToFindBackForm[item]] = obj[item];
        }
    }
    return result;
}

export function genRegisterArgs (obj) {
    let result = {};
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            result[mapToRegister[item]] = obj[item];
        }
    }
    return result;
}
