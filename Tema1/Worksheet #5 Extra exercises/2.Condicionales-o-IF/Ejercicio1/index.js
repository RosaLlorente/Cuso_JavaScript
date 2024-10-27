//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Introduce un número")); //Variable que solicita al usuario un número y verifica que sea un int

//PROGRAMA
var condicion = numero % 2 == 0 ? " es par.": " es impar"; //Variable que guarda la condición para que sea par
document.write("El número " + numero + condicion); //Muestra por pantalla el resultado