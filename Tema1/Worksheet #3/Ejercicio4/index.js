//DECLARACIÓN DE VARIABLES
var radio = parseFloat(prompt("Insertar radio"));//Variable que almacenara el radio que se solicita al usuario y se asegura de que sea un float.

//FUNCIONES
//Declaración de la función calCircumfrence;se encargara de calcular la circuferencia dado el radio.
function calCircumfrence(radio)
{
    let circunferencia = 2*Math.PI*radio; //Variable local que calcula la circuferencia
    return "La circunferencia es " + circunferencia; //Devuelve una cadena de caracteres con la circuferencia.
}

//Declaración de la función calcArea;se encargara de calcular el área dado el radio.
function calcArea(radio)
{
    let area = Math.PI * Math.pow(radio,2); //Variable local que calcula el área.
    return "El área es " + area; //Devuelve una cadena de caracteres con el área.
}

//PROGRAMA
document.write(calCircumfrence(radio) + "<br>"); //Llamada de la función calCircumfrence y salida por pantalla del resultado
document.write(calcArea(radio)); //Llamada de la función calcArea y salida por pantalla del resultado