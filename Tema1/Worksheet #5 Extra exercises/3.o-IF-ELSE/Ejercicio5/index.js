//DECLARACIÓN DE VARIABLES
var nota = parseFloat(prompt("Introduce la nota del examen")); //Declaración de variable que solicita al usuario la nota de examen  y verifica que sea un float
var trabajo1 = parseFloat(prompt("Introduce la nota del trabajo1")); //Declaración de variable que solicita al usuario la nota de un trabajo y verifica que sea un float
var trabajo2 = parseFloat(prompt("Introduce la nota del trabajo2")); //Declaración de variable que solicita al usuario la nota de un trabajo y verifica que sea un float

//PROGRAMA
var media = ((nota * (75/100) + (trabajo1 * (25/100) + (trabajo2 * (25/100)) / 3))); //Declara y realiza la media de la nota

var condicion = 
(nota >= 4.5) && (trabajo1 >= 4.5) && (trabajo2 >= 4.5) && (media >= 5) ? "Has aprobado con una media de " + media : "Has suspendido con una media de " +media;
document.write(condicion); //Declara la condición para saber el resultado