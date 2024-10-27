var Cadena = "Hola soy paca y me gustan las botas";

function invierteCadena(cad_arg)
{
    var CadenaInvertida = "";
    for(var i = cad_arg.length + 1;i >= 0;i--)
    {
        CadenaInvertida += cad_arg.charAt(i);
    }
    return CadenaInvertida;
}

function inviertePalabras(cad_arg)
{
    var CadenaArray = cad_arg.split(" ");
    var Cadena = "";

    for (var i = 0; i < CadenaArray.length; i++) 
        {
        var Palabra = "";
        for (var j = CadenaArray[i].length - 1; j >= 0; j--) {
            Palabra += CadenaArray[i].charAt(j);
        }
        Cadena += Palabra + " ";
    }
    return Cadena;
}

function encuentraPalabraMasLarga(cad_arg)
{
    var CadenaArray = cad_arg.split(" ");
    var PalabraLarga = "";
    for (var i = 0; i < CadenaArray.length; i++) 
    {
        PalabraLarga.length > CadenaArray[i].length ? PalabraLarga : PalabraLarga = CadenaArray[i];
    }
    return PalabraLarga;
}   

function fltraPalabrasMasLargas(cad_arg, numero)
{
    var CadenaArray = cad_arg.split(" ");
    var PalabraLarga = "";
    for (var i = 0; i < CadenaArray.length; i++) 
    {
        numero == CadenaArray[i].length ? PalabraLarga += CadenaArray[i] + " " : PalabraLarga;
    }
    return PalabraLarga;
}

function cadenaBienFormada(cad_arg)
{
    var CadenaArray = cad_arg.split(" ");
    var CadenaBienFormada = "";
    for (var i = 0; i < CadenaArray.length; i++) 
    {
        var Palabra = "";
        for (var j = 0; j < CadenaArray[i].length; j++) 
        {
            if(i == 0 && j==0)
            {
                Palabra += CadenaArray[i].charAt(0).toUpperCase();
            }
            else
            {
                Palabra += CadenaArray[i].charAt(j);
            }
        }
        CadenaBienFormada += Palabra + " ";
    }
    return CadenaBienFormada;
}

document.write("Cadena Invertida: " + invierteCadena(Cadena) + "<br>");
document.write("Palabras invertidas: " + inviertePalabras(Cadena) + "<br>");
document.write("Palabras más larga: " + encuentraPalabraMasLarga(Cadena) + "<br>");
document.write("Palabras palabras más largas: " + fltraPalabrasMasLargas(Cadena,5) + "<br>");
document.write("Palabras Cadena bien formada: " + cadenaBienFormada(Cadena) + "<br>");
