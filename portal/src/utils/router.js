/**
 * 应用跳转
 * @param href
 * @param title
 * @param stateObj
 */
function appReadyGo(href = '/', title = null, stateObj = {}) {
    window.history && window.history.pushState(stateObj, title, href + '/');
}

export {
    appReadyGo
}
