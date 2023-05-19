/**
 * 下载文件
 */
export function downloadFile(url: string, fileName: string) {
  // 创建隐藏的可下载链接
  const eleLink = document.createElement('a');
  eleLink.download = fileName;
  eleLink.target = '_blank';
  eleLink.style.display = 'none';
  eleLink.rel = 'nofollow';
  // 字符内容转变成blob地址
  // const blob = new Blob([url]);
  eleLink.href = url
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
}