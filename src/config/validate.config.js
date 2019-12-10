export const validateRuleList = {
    username: /^[0-9A-Za-z]{2,10}$/,
    password: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{1,20}$/,
    email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    verifyCode: /^[0-9A-Za-z]{5}$/,
};
