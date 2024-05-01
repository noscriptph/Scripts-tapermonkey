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

    // Lista de URLs que deseas ver en modo de escritorio
    var desktopSites = [
        "https://example.com",
        "https://example.org"
        // Añade más URLs según sea necesario
    ];

    // Función para verificar si la URL actual está en la lista de escritorio
    function isInDesktopSites(url) {
        return desktopSites.some(function(desktopSite) {
            return url.indexOf(desktopSite) !== -1;
        });
    }

    // Verificar si la página actual está en la lista de escritorio
    if (isInDesktopSites(window.location.href)) {
        // Código para cambiar a vista de escritorio
        // Por ejemplo, aquí podrías enviar un cambio de agente de usuario al navegador para que lo trate como un navegador de escritorio
        // Este es un ejemplo de cómo podrías hacerlo, pero ten en cuenta que cambiar el agente de usuario puede afectar la funcionalidad de algunas páginas web
        var desktopUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';
        Object.defineProperty(navigator, 'userAgent', {
            value: desktopUserAgent,
            writable: false,
            configurable: true,
            enumerable: true
        });
    }
})();
