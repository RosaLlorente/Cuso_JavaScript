let columnas,altura,anchura;
window.onload =  function()
{
    columnas = parseInt(prompt("Introduzca él número de columnas"));
    altura = parseInt(prompt("Introduzca la altira de las celdas"));
    anchura = parseInt(prompt("Introduzca la anchura de las celdas"));

    document.write('<table  style="border: 1px solid black;border-collapse: collapse;"><tr>');
    for(let i = 0;i < columnas;i++)
    {
        document.write('<td  style="width: ' + anchura + 'px; height: ' + altura + 'px;border: 1px solid black;"</td>')
    }
    document.write("</tr></table>")
}