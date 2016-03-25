// ==UserScript==
// @name          netdna-storage bypass clicker
// @namespace     https://github.com/RoeeM/netdna-storage-click-bypass
// @description   Bypass the clicking on netdna-storage.
// @updateURL     https://github.com/RoeeM/netdna-storage-click-bypass/raw/master/netdna-storage.bypass.user.js
// @version       1
// @include       http://netdna-storage.com/*
// @include       http://www.netdna-storage.com/*
// ==/UserScript==
var downBtn = document.getElementsByClassName('plan-footer-item');
if (downBtn.length === 1) {
  downBtn[0].click();
}
