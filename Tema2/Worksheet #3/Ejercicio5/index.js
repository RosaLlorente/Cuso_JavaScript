window.onload = () =>
{
    document.write(EliminarRepeticion("hola me llamo manola"));
}
function EliminarRepeticion(Cadena)
{
    let nuevaCadena = "";

    for(i = 0; i <= Cadena.length; i++)
    {
        if (!nuevaCadena.includes(Cadena[i]) && Cadena[i] !== " ") 
        {
            nuevaCadena += Cadena[i];
        }
    }
    return nuevaCadena;
}