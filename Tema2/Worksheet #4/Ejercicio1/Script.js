window.onload = function()
{
    Información_Navegador();
    document.write("<br>");
    Sistema_Hardware();
    document.write("<br>");
    Pantalla_Ventana();
    document.write("<br>");
    Información_Red();
    document.write("<br>");
    Cookies_Almacenamiento();
    document.write("<br>");
    Historial_Navegador();
    document.write("<br>");
    Audio_Video();
    document.write("<br>");
    Seguridad_Permisos();
    document.write("<br>");
    APIs_FuncionesUsuario();
}

function Información_Navegador()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
        document.write("<tr>");
            document.write('<th style ="border: solid 1px black;" colspan="3">Información del Navegador</th>');
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.appVersion</td>')
            document.write('<td style ="border: solid 1px black;">Versión del navegador</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.appVersion + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.appName</td>')
            document.write('<td style ="border: solid 1px black;">Nombre del navegador</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.appName + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.product</td>')
            document.write('<td style ="border: solid 1px black;">Motor del navegador</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.product + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.userAgent</td>')
            document.write('<td style ="border: solid 1px black;">Agente de usuario</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.userAgent + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.platform</td>')
            document.write('<td style ="border: solid 1px black;">Plataforma del sistema operativo</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.platform + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.language</td>')
            document.write('<td style ="border: solid 1px black;">Idioma preferido del usuario</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.language + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.languages</td>')
            document.write('<td style ="border: solid 1px black;">Lista de idiomas preferidos</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.languages + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function Sistema_Hardware()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
        document.write("<tr>");
            document.write('<th style ="border: solid 1px black;" colspan="3">Información del Sistema y Hardware</th>');
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.onLine</td>')
            document.write('<td style ="border: solid 1px black;">Estado de conexión en línea</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.onLine + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.hardwareConcurrency</td>')
            document.write('<td style ="border: solid 1px black;">Núcleos de CPU (número de hilos disponibles)</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.hardwareConcurrency + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.deviceMemory</td>')
            document.write('<td style ="border: solid 1px black;">Memoria RAM aproximada (en GB, aproximado)</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.deviceMemory + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">"geolocation" in navigator</td>')
            document.write('<td style ="border: solid 1px black;">Soporte de geolocalización (true/false)</td>')
            document.write('<td style ="border: solid 1px black;">' + ("geolocation" in navigator) + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function Pantalla_Ventana()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
        document.write("<tr>");
            document.write('<th style ="border: solid 1px black;" colspan="3">Información de la Pantalla y Ventana</th>');
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.width</td>')
            document.write('<td style ="border: solid 1px black;">Ancho de la pantalla total</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.width + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.height</td>')
            document.write('<td style ="border: solid 1px black;">Alto de la pantalla total</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.height + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.availWidth</td>')
            document.write('<td style ="border: solid 1px black;">Ancho de la pantalla disponible</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.availWidth + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.availHeight</td>')
            document.write('<td style ="border: solid 1px black;">Alto de la pantalla disponible</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.availHeight + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.colorDepth</td>')
            document.write('<td style ="border: solid 1px black;">Profundidad de color de la pantalla (bits de color)</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.colorDepth + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">screen.pixelDepth</td>')
            document.write('<td style ="border: solid 1px black;">Resolución de color (bits por píxel)</td>')
            document.write('<td style ="border: solid 1px black;">' + screen.pixelDepth + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">window.innerWidth</td>')
            document.write('<td style ="border: solid 1px black;">Ancho de la ventana del navegador</td>')
            document.write('<td style ="border: solid 1px black;">' + window.innerWidth + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">window.innerHeight</td>')
            document.write('<td style ="border: solid 1px black;">Alto de la ventana del navegador</td>')
            document.write('<td style ="border: solid 1px black;">' + window.innerHeight + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">window.screenX</td>')
            document.write('<td style ="border: solid 1px black;">Coordenadas de la ventana en relación con la pantalla eje X</td>')
            document.write('<td style ="border: solid 1px black;">' + window.screenX + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">window.screenY</td>')
            document.write('<td style ="border: solid 1px black;">Coordenadas de la ventana en relación con la pantalla eje Y</td>')
            document.write('<td style ="border: solid 1px black;">' + window.screenY + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function Información_Red()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
        document.write("<tr>");
            document.write('<th style ="border: solid 1px black;" colspan="3">Información de la Red</th>');
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.connection?.effectiveType</td>')
            document.write('<td style ="border: solid 1px black;">Tipo de conexión (si está disponible)</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.connection?.effectiveType) + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.connection?.downlink</td>')
            document.write('<td style ="border: solid 1px black;">Banda ancha de la red (Mbps, si está disponible)</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.connection?.downlink) + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.connection?.rtt</td>')
            document.write('<td style ="border: solid 1px black;">Latencia estimada de la red (ms, si está disponible)</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.connection?.rtt) + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function Cookies_Almacenamiento()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
        document.write("<tr>");
            document.write('<th style ="border: solid 1px black;" colspan="3">Información de las Cookies y Almacenamiento</th>');
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.cookieEnabled</td>')
            document.write('<td style ="border: solid 1px black;">Habilitación de cookies (true/false)</td>')
            document.write('<td style ="border: solid 1px black;">' + navigator.cookieEnabled + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">localStorage.length</td>')
            document.write('<td style ="border: solid 1px black;">Espacio de almacenamiento local disponible</td>')
            document.write('<td style ="border: solid 1px black;">' + localStorage.length + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">localStorage.length</td>')
            document.write('<td style ="border: solid 1px black;">Espacio de almacenamiento de sesión disponible</td>')
            document.write('<td style ="border: solid 1px black;">' + localStorage.length + '</td>')
        document.write("</tr>");
    document.write("</table>");
}
function Historial_Navegador()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
    document.write("<tr>");
        document.write('<th style ="border: solid 1px black;" colspan="3">Información sobre la Historia del Navegador</th>');
    document.write("</tr>");

    document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">history.length</td>')
            document.write('<td style ="border: solid 1px black;">Número de páginas en el historial de navegación</td>')
            document.write('<td style ="border: solid 1px black;">' + history.length + '</td>')
        document.write("</tr>");
    document.write("</table>");
}
function Audio_Video()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
    document.write("<tr>");
        document.write('<th style ="border: solid 1px black;" colspan="3">Información sobre el Audio y Video</th>');
    document.write("</tr>");

    document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.mediaDevices.enumerateDevices()</td>')
            document.write('<td style ="border: solid 1px black;">Verifica si hay dispositivos multimedia disponibles</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.mediaDevices.enumerateDevices()) + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">"AudioContext" in window || "webkitAudioContext" in window</td>')
            document.write('<td style ="border: solid 1px black;">Estado de reproducción de audio</td>')
            document.write('<td style ="border: solid 1px black;">' + ("AudioContext" in window || "webkitAudioContext" in window) + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function Seguridad_Permisos()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
    document.write("<tr>");
        document.write('<th style ="border: solid 1px black;" colspan="3">Información de Seguridad y Permisos</th>');
    document.write("</tr>");

    document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">Notification.permission</td>')
            document.write('<td style ="border: solid 1px black;">Estado de permiso de notificaciones</td>')
            document.write('<td style ="border: solid 1px black;">' + Notification.permission + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">location.protocol === "https:"</td>')
            document.write('<td style ="border: solid 1px black;">Soporte para HTTPS y SSL (true/false)</td>')
            document.write('<td style ="border: solid 1px black;">' + (location.protocol === "https:") + '</td>')
        document.write("</tr>");
    document.write("</table>");
}

function APIs_FuncionesUsuario()
{
    document.write('<table style ="border: solid 1px black;border-collapse: collapse;">');
    document.write("<tr>");
        document.write('<th style ="border: solid 1px black;" colspan="3">Extra: Otros APIs y Funciones de Usuario</th>');
    document.write("</tr>");

    document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.vibrate([200, 100, 200])</td>')
            document.write('<td style ="border: solid 1px black;">Activar vibración en dispositivos móviles</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.vibrate([200, 100, 200])) + '</td>')
        document.write("</tr>");

        document.write("<tr>");
            document.write('<td style ="border: solid 1px black;">navigator.geolocation.getCurrentPosition(success, error)</td>')
            document.write('<td style ="border: solid 1px black;">Información de la ubicación (si se solicita)</td>')
            document.write('<td style ="border: solid 1px black;">' + (navigator.geolocation.getCurrentPosition(success, error)) + '</td>')
        document.write("</tr>");
    document.write("</table>");
}