import { validateRuleList } from '../config/validate.config';
import { mapToChinese } from '../config/list.config';

function checkIsEmpty (value) {
    return !value || value.length === 0;
}

function generateMessageObj (status, msg = '') {
    return {
        status,
        msg
    };
}

function checkFormat (key, value) {
    return validateRuleList[key].test(value);
}

/**
 * @param value
 * @param key
 * @returns {object}
 */
export function validate (value, key) {
    if (checkIsEmpty(value)) {
        return generateMessageObj(false, `${mapToChinese[key]}不能为空`);
    }
    if (!checkFormat(key, value)) {
        return generateMessageObj(false, `${mapToChinese[key]}格式不正确`);
    }
    return generateMessageObj(true);
}

/***
 *
 * @param store
 * @returns {{msg: string, status: *}|{status: boolean}}
 */
export function validateAll (store) {
    for (let item in store) {
        if (store.hasOwnProperty(item)) {
            let obj = validate(store[item], item);
            if (!obj.status) {
                return obj;
            }
        }
    }
    return { status: true };
}
