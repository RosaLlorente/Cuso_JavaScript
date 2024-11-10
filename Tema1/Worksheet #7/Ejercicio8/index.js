window.onload = () =>
{
    document.write(squareAndSum(1,2,3,5));
}
function squareAndSum()
{
    var resultado = 0;
    var cuadrado = 0;
    for(i=0;i < arguments.length; i++)
    {
        resultado += Math.pow(arguments[i],2);
    }
    return resultado;
}