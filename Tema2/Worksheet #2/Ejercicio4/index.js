function calculo()
{
    var cateto1 = parseInt(prompt("Introduce el tamaño del cateto 1"));
    var cateto2 = parseInt(prompt("Introduce el tamaño del cateto 2"));
    var hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
    document.write("<br>La hipotenusa es de: " + hipotenusa + "<br>----------");
}

do {
    calculo();
    var opcion = prompt("¿Desea volver a realizar el cálculo? Responder con: si o no").toLocaleLowerCase(); 
} while (opcion !== "no"); 