let resultado;
window.onload = function()
{
    for(let i = 0;i<= 10;i++)
    {
        document.write("<h1> Tabla del " + i + "</h1>")
        for(let j = 0;j <= 10;j++)
        {
            resultado = i * j;
            document.write("<p>" + i + " x " + j + " = " + resultado + "</p>");
        }
        document.write("<hr>");
    }
}