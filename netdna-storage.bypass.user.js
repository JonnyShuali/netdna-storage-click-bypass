// ==UserScript==
// @name          netdna-storage bypass clicker
// @namespace     http://www.webmonkey.com
// @description   Bypass the clicking on netdna-storage.
// @include       http://netdna-storage.com/*
// @include       http://www.netdna-storage.com/*
// ==/UserScript==
var downBtn = document.getElementsByClassName('plan-footer-item');
if (downBtn.length === 1) {
  downBtn[0].click();
}
