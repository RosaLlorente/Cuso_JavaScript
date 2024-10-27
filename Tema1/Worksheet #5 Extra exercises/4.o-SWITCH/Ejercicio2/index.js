//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Introduzca un número")); //Variable que solicita al usuario un número y verifica que sea un entero

//PROGRAMA 
var esPar = numero % 2 == 0 ? "Es par" : "No es par"; //Condición para que sea par
var Multiplo3 = numero % 3 == 0 ? "Es multiplo de 3" : "No es multiplo de 3"; //Condición para que sea multiplo de 3
var Multiplo5 = numero % 5 == 0 ? "Es multiplo de 5" : "No es multiplo de 5"; //Condición para que sea multiplo de 5

document.write(esPar + "<br>" + Multiplo3 + "<br>" +  Multiplo5 + "<br>");