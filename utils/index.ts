/**
 * 打开本地 app
 */
export function openApp(url) {
  const u = navigator.userAgent
  const app = navigator.appVersion
  const isMac = u.indexOf('Mac OS X') > -1
  const isWin = u.indexOf('Windows') > -1
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const isWeixin = u.indexOf('MicroMessenger') > -1
  console.log('u', u, app, isMac, isWin, isAndroid, isIOS, isWeixin)
  //URL Scheme
  if (isMac) {
    window.location.href = url
  }

}

