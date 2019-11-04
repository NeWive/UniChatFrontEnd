export const validateRuleList = {
    username: /^[A-Za-z0-9]{2,10}$/,
    password: /^[A-Za-z0-9`~!@#$^&*()=|{}':;',.<>/?~\\[\]+-^]{1,20}$/,
    email: /^\w+@+[0-9a-zA-Z]+\.(com|com.cn|edu.cn|edu|hk|cn|net)$/,
    verifyCode: /^[A-Za-z0-9]{4}&/,
};
