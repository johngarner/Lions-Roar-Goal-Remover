// ==UserScript==
// @name         Lion's Roar Goal Remover
// @namespace    https://garner.io
// @version      1.0
// @description  Removes everything after and including the goal parameter from Lion's Roar URLs.
// @author       John Garner
// @icon         https://www.lionsroar.com/wp-content/uploads/2019/05/cropped-LR-favicon-2x-yellow-32x32.png
// @grant        none
// @run-at       document-start
// @include      *://*.lionsroar.com/*?goal=*
// ==/UserScript==

var site = location.href.replace(/\?goal=.*/, '');
location.replace (site);