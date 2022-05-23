// ==UserScript==
// @name         直达目标页
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  直达目标页，现支持掘金、简书、知乎
// @author       QuentinHsu
// @match        https://link.juejin.cn/?target=*
// @match        https://www.jianshu.com/go-wild?ac=2&url=*
// @match        https://link.zhihu.com/?target=*
// @grant        none
// ==/UserScript==
(function IIFE() {
  'use strict';
  function getParam(field,url) {
      let href = url ? url : window.location.href;
      let urlObject = new URL(href);
      let fieldValue = urlObject.searchParams.get(field);
      return fieldValue;
  }
  let targetLink = getParam('target') || getParam('url');
  document.location.href = targetLink;
})();
