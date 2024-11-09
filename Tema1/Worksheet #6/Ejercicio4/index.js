let columnas,altura,anchura,contador;
window.onload =  function()
{
    columnas = parseInt(prompt("Introduzca él número de columnas"));
    altura = parseInt(prompt("Introduzca la altira de las celdas"));
    anchura = parseInt(prompt("Introduzca la anchura de las celdas"));
    contador = 0;

    document.write('<table  style="border: 1px solid black;border-collapse: collapse;"><tr>');
    do
    {
        if(contador%2 != 0)
        {
            document.write('<td  style="width: ' + anchura + 'px; height: ' + altura + 'px;border: 1px solid black;background-color: white;"</td>')
        }
        else
        {
            document.write('<td  style="width: ' + anchura + 'px; height: ' + altura + 'px;border: 1px solid black;background-color: black;"</td>')
        }
        contador ++;
    }while(contador <= columnas)
    document.write("</tr></table>")
}