window.onload
{
    Pantalla_Ventana();
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