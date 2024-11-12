window.onload = function()
{
    document.write(esSubcadena("Hola Mundo", "Mundo")); 
}

function esSubcadena(cadena1, cadena2) 
{
    let resultado;
    for (let i = 0; i <= cadena1.length - cadena2.length; i++) 
        {
            let esSubcadena = true; 
            for (let j = 0; j < cadena2.length; j++) 
            {
                if (cadena1[i + j] !== cadena2[j]) 
                {
                    esSubcadena = false;
                    break;
                }
            }
        if (esSubcadena) 
        {
            resultado = "La subcadena " + cadena2 + " comienza en la posición " + i;
        }
    }
    resultado = cadena2 + " no es una subcadena de " + cadena1
    return resultado;
}