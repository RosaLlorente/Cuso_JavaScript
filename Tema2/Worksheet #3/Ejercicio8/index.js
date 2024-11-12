window.onload = function ()
{
    document.write("'Homa hala caona coama de tala' tiene:" + NumeroPalabras("Homa hala caona coama de tala") + "palabras");
}
function NumeroPalabras(cad_arg)
{
    let CadenaArray = cad_arg.split(" ");
    let contador = 0;
    for (var i = 0; i < CadenaArray.length; i++) 
    {
        contador++;
    }
    return contador;
}   