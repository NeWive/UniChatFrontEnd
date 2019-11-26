/***
 *
 * @param fn
 * @param offset
 * @param args
 * @returns {Function}
 */
export default function throttle (fn, offset, args) {
    let lastTime = null;
    return function () {
        let nowTime = +new Date();
        if (nowTime - lastTime > offset || !lastTime) {
            fn(...args);
            lastTime = nowTime;
        }
    };
};
