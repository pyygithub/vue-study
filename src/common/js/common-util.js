/**
 * 自定义工具类
 * @type {{getScrollTop(): *, getClientHeight(): *, getScrollHeight(): *}}
 */

const common = {

  // 取窗口滚动条高度
  getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  },

  // 取窗口可视范围的高度
  getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
      var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
  },

  // 取文档内容实际高度
  getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  },
}

export default common;

