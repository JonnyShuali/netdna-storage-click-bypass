// ==UserScript==
// @name          netdna-storage bypass clicker
// @namespace     https://github.com/JonnyShuali/netdna-storage-click-bypass
// @description   Bypass the clicking on netdna-storage.
// @updateURL     https://github.com/JonnyShuali/netdna-storage-click-bypass/raw/master/netdna-storage.bypass.user.js
// @version       2
// @include       http://netdna-storage.com/*
// @include       http://www.netdna-storage.com/*
// ==/UserScript==
var nextURL = document.getElementsByClassName("btn plan-footer-item")[0].href;
window.location.href = nextURL;