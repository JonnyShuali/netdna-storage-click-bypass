// ==UserScript==
// @name          netdna-storage bypass clicker
// @namespace     https://github.com/JonnyShuali/netdna-storage-click-bypass
// @description   Bypass the clicking on netdna-storage.
// @updateURL     https://github.com/JonnyShuali/netdna-storage-click-bypass/raw/master/netdna-storage.bypass.user.js
// @version       3
// @include       http://www.netdna-storage.com/f/*
// @include       http://www.netdna-storage.com/step/*
// @include       http://netdna-storage.com/f/*
// @include       http://netdna-storage.com/step/*
// @run-at        document-start
// ==/UserScript==

window.addEventListener('beforescriptexecute', function() {
    var g = document.getElementsByClassName('plan-footer-item');
    for (var i = 0; i < g.length; i++) {
        if (g[i].getAttribute('data-href')) {
            window.location = g[i].getAttribute('data-href');
        }
    }
}, false);