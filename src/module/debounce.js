export function debounce (func, wait, context) {
    if (context.timer) {
        clearTimeout(context.timer);
        context.timer = null;
    }
    setTimeout(func, wait);
}
