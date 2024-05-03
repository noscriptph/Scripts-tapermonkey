// ==UserScript==
// @name         Habilitar Click Derecho en Red Local
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Intenta habilitar el click derecho
// @author       noscript
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Restaura el comportamiento predeterminado del click derecho
    window.addEventListener('contextmenu', function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = true;
        return true;
    }, true);
})();
