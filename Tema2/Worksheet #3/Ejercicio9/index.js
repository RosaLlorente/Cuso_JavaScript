window.onload = function()
{
    cadena = "Hola";
    crearTabla(cadena);
}
function crearTabla(cadena) 
{
    let cadenaInvertida = invierteCadena(cadena);
    document.write("<table>");
    for (let i = 0; i < cadena.length; i++) 
    {
        document.write("<tr>");
            for(let j = 0;j < cadena.length;j++)
            {
                if(i===0)
                {
                    document.write("<td>" + cadena[j] + "</td>");
                }
                else if(i===1)
                {
                    if(j===1 || j ===2)
                    {
                    document.write("<td></td>");
                    }
                    else
                    {
                        document.write("<td>" + cadena[j] + "</td>");
                    }
                }
                else if(i===2)
                {
                    if(j===1 || j ===2)
                    {
                    document.write("<td></td>");
                    }
                    else
                    {
                        document.write("<td>" + cadenaInvertida[j] + "</td>");
                    }
                }
                if(i===3)
                {
                    document.write("<td>" + cadenaInvertida[j] + "</td>");
                }
            }
        document.write("</tr>")
    }
    document.write("</table>");
}

function invierteCadena(cad_arg)
{
    var CadenaInvertida = "";
    for(var i = cad_arg.length + 1;i >= 0;i--)
    {
        CadenaInvertida += cad_arg.charAt(i);
    }
    return CadenaInvertida;
}