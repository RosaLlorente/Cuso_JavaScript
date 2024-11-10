var Cadena = "Esto es una cadena de texto";

function AnalisisCadena(cad_arg)
{
    let resultado;
    cad_arg == cad_arg.toLocaleLowerCase() ? resultado = "La cadena esta formada por minusculas" 
    : cad_arg == cad_arg.toLocaleUpperCase() ? resultado = "La cadena esta formada por mayusculas"
    : resultado = "La cadena es mixta";

    return resultado;
}

document.write(AnalisisCadena(Cadena));