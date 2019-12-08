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

/**
 * @param value
 * @param key
 * @returns {object}
 */
export function validate (value, key) {
    if (checkIsEmpty(value)) {
        return generateMessageObj(false, `${mapToChinese[key]}不能为空`);
    }
    return generateMessageObj(true);
}
