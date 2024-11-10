let columna, fila, altura, anchura;

window.onload = function() {
    columna = parseInt(prompt("Introduce el número de columnas"));
    fila = parseInt(prompt("Introduce el número de filas"));
    altura = parseInt(prompt("Introduce la altura de las celdas"));
    anchura = parseInt(prompt("Introduce la anchura de las celdas"));

    document.write('<table style="border: solid 1px black; border-collapse: collapse;">');
    for (let i = 0; i < fila; i++) 
    { 
        document.write("<tr>");
        for (let j = 0; j < columna; j++) 
        { 
            document.write('<td style="border: solid 1px black; width:' + anchura + 'px; height:' + altura + 'px;"></td>');
        }
        
        document.write("</tr>");
    }
    document.write("</table>");
}
