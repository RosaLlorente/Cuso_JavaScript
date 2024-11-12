window.onload = function()
{
    document.write(esPalindromo("101")); 
}

function esPalindromo(cadena) 
{
    let CandenaLimpia = cadena.toLowerCase();
    let CadenaAlReves= cadena.split("").reverse().join("");
    CandenaLimpia === CadenaAlReves ? resultado = "Es un palindromo" : resultado = "No es un palindromo";
    return resultado;
}