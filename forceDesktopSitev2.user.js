// ==UserScript==
// @name         Vista de Escritorio para ciertas páginas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cambia algunas páginas a vista de escritorio
// @author       Tu Nombre
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Lista de patrones de URL que deseas ver en modo de escritorio
    var desktopSitesPatterns = [
        /https:\/\/example\.com\/.*/,
        /https:\/\/example\.org\/.*/
        // Agrega más patrones de URL según sea necesario
    ];

    // Función para verificar si la URL actual coincide con algún patrón de URL de escritorio
    function isInDesktopSites(url) {
        return desktopSitesPatterns.some(function(pattern) {
            return pattern.test(url);
        });
    }

    // Verificar si la página actual coincide con algún patrón de URL de escritorio
    if (isInDesktopSites(window.location.href)) {
        // Código para cambiar a vista de escritorio
        // Aquí podrías realizar las acciones necesarias para cambiar a vista de escritorio
        // Por ejemplo, cambiar el agente de usuario como se mostró en el script anterior
    }
})();
