const mapToUserInfo = {
    nickname: 'username',
    uid: 'id',
    profile: 'desc',
    email: 'email',
    avatar: 'portrait'
};

export function mapToLogIn (obj) {
    let result = {};
    for (let item in mapToUserInfo) {
        if (mapToUserInfo.hasOwnProperty(item) && obj.hasOwnProperty(item)) {
            result[mapToUserInfo[item]] = obj[item];
        }
    }
    return result;
}
