// ==UserScript==
// @name         Facebook video controls
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Enable video controls on Facebook stories and reels
// @author       https://github.com/yacine-bens
// @match        https://*.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @updateURL    https://github.com/yacine-bens/facebook-video-controls/blob/main/script.js
// @downloadURL  https://github.com/yacine-bens/facebook-video-controls/blob/main/script.js
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.contains('reel')) {
        const hiddenDiv = document.querySelector('div[data-video-id]').parentElement.nextSibling;
        hiddenDiv.remove();
        const videoElement = document.querySelector('video');
        videoElement.nextSibling.remove();
        videoElement.controls = true;
    }
    else if(window.location.href.contains('stories')) {
        const video = document.evaluate('//video[following-sibling::div[@data-instancekey]]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        video.nextSibling.remove();
        video.controls = true;
    }
})();