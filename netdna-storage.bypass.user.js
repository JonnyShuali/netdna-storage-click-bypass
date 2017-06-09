// ==UserScript==
// @name          netdna-storage bypass clicker
// @namespace     https://github.com/JonnyShuali/netdna-storage-click-bypass
// @description   Bypass the clicking on netdna-storage.
// @updateURL     https://github.com/JonnyShuali/netdna-storage-click-bypass/raw/master/netdna-storage.bypass.user.js
// @version       4
// @include       http://www.netdna-storage.com/f/*
// @include       http://www.netdna-storage.com/step/*
// @include       http://netdna-storage.com/f/*
// @include       http://netdna-storage.com/step/*
// @run-at        document-start
// @grant         GM_xmlhttpRequest 
// ==/UserScript==



GM_xmlhttpRequest({
    method: 'GET',
    url: window.location.href,
    onload: function(response) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(response.responseText, 'text/html');
        if (doc === null) {
            return;
        }
        var g = doc.getElementsByClassName('plan-footer-item');
        for (var i = 0; i < g.length; i++) {
            if (g[i].getAttribute('data-href')) {
                location.assign(g[i].getAttribute('data-href'));
            }
        }
    }
});