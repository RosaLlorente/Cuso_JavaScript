var contadores = [0, 0, 0, 0, 0, 0];
var resultado = "";

function lanzamiento()
{
    let numero = Math.floor(Math.random() * 6 + 1);
    return numero;
}

for(let i = 0; i <= 6000;i++)
{
     var tirada = lanzamiento();
    contadores[tirada - 1]++;
}

for(var i = 0;i < contadores.length; i++)
{
    resultado += "El número " + (i + 1) + " se repite " + contadores[i] + "<br>";
}
document.write(resultado);
