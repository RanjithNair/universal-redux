import serialize from 'serialize-javascript'
const AppShell = (assetsManifestData, state, markup, wdsUrl) =>
  `<!DOCTYPE html>
      <html>
        <head>
          <title>Universal Redux Boilerplate - RJ</title>
          <link rel="manifest" href="/PWAManifest.json">
          <meta name="mobile-web-app-capable" content="yes">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <meta name="theme-color" content="#0000FF">
          <meta name="msapplication-navbutton-color" content="#027">
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
          <meta name="msapplication-starturl" content="/">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="icon" sizes="48x48" href="${wdsUrl}/icons/AppIcon_48.png">
          <link rel="apple-touch-icon" sizes="48x48" href="${wdsUrl}/icons/AppIcon_48.png">
          <link rel="apple-touch-startup-image" sizes="48x48" href="${wdsUrl}/icons/AppIcon_48.png">

          <link rel="icon" sizes="64x64" href="${wdsUrl}/icons/AppIcon_64.png">
          <link rel="apple-touch-icon" sizes="64x64" href="${wdsUrl}/icons/AppIcon_64.png">
          <link rel="apple-touch-startup-image" sizes="64x64" href="${wdsUrl}/icons/AppIcon_64.png">

          <link rel="icon" sizes="128x128" href="${wdsUrl}/icons/AppIcon_128.png">
          <link rel="apple-touch-icon" sizes="128x128" href="${wdsUrl}/icons/AppIcon_128.png">
          <link rel="apple-touch-startup-image" sizes="128x128" href="${wdsUrl}/icons/AppIcon_128.png">

          <link rel="icon" sizes="256x256" href="${wdsUrl}/icons/AppIcon_256.png">
          <link rel="apple-touch-icon" sizes="256x256" href="${wdsUrl}/icons/AppIcon_256.png">
          <link rel="apple-touch-startup-image" sizes="256x256" href="${wdsUrl}/icons/AppIcon_256.png">

          <link rel="icon" sizes="512x512" href="${wdsUrl}/icons/AppIcon_512.png">
          <link rel="apple-touch-icon" sizes="512x512" href="${wdsUrl}/icons/AppIcon_512.png">
          <link rel="apple-touch-startup-image" sizes="512x512" href="${wdsUrl}/icons/AppIcon_512.png">

          <script src=${assetsManifestData['main.js']} async defer></script>
          <script src=${assetsManifestData['vendor.js']} async defer></script>
          <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js');
            });
          }
          </script>
          <link rel="preload" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
          <noscript>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
          </noscript>
          </script>
          <link rel="preload" href="${wdsUrl}/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
          <noscript>
            <link rel="stylesheet" href="${wdsUrl}/styles.css">
          </noscript>
          <script>
            !function(t){"use strict";t.loadCSS||(t.loadCSS=function(){});var e=loadCSS.relpreload={};if(e.support=function(){var e;try{e=t.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),e.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},e.poly=function(){if(!e.support())for(var a=t.document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n];"preload"!==o.rel||"style"!==o.getAttribute("as")||o.getAttribute("data-loadcss")||(o.setAttribute("data-loadcss",!0),e.bindMediaToggle(o))}},!e.support()){e.poly();var a=t.setInterval(e.poly,500);t.addEventListener?t.addEventListener("load",function(){e.poly(),t.clearInterval(a)}):t.attachEvent&&t.attachEvent("onload",function(){e.poly(),t.clearInterval(a)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:t.loadCSS=loadCSS}("undefined"!=typeof global?global:this);
          </script>
          <script>window.__INITIAL_STATE__ = ${serialize(state)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>`
export default AppShell
