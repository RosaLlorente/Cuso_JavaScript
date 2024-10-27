//DECLARACION DE VARIABLES
const edadMaxima = 100; //Declaración de una constante de la edad máxima permitida
var edadActual = ""; //Variable que almacenara la edad actual
var cantidad = ""; //Variable que almacenara la cantidad que se consume

//FUNCIONES
//Declaración de la función CalcularOferta;se encargara de calcular la cantidadTotal de consumición de los años restantes de vida
function CalcularOferta(edadActual,cantidad)
{
    edadActual = prompt("Introduce tu edad actual"); //Se le solicita al usuario su edad actual
    cantidad = parseInt(prompt("Introduce la cantidad que consumes")); //Se le solicita al usuario la cantidad de consumición
    let años = edadMaxima - edadActual; //Variable local que calcula los años restantes
    let cantidadTotal = años * cantidad * 365; //Variable local que calcula la cantidad total en base a dias restantes
    cantidadTotal = Math.round(cantidadTotal); //Redondeo de la cantidad total
    return "Necesitarás que " + cantidadTotal + " te dure hasta la madura edad de " + edadMaxima + "<br>"; //Devuelve una cadena de caracteres con la cantidad total de consumición y el máximo de edad
}

//PROGRAMA

for ( i = 0; i < 3;i++) //Bucle for de un máximo de tres flujos
{
    document.write(CalcularOferta() + "<br>"); //Llamada de la función CalcularOferta y salida por pantalla del resultado
}