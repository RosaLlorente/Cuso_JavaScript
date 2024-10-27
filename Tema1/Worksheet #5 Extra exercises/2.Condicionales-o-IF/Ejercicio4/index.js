//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Introduce un número")); //Declaración de variable que solicita al usuario un numero y verifica que sea un int

//PROGRAMA
var condicion = numero > 100 ? "Sele ha aplicado descuento: " + (numero * (15/100)) : "No se le aplica descuento"; //Variable que almacena la condición para aplicar el descuento
document.write(condicion); //Salida por pantalla del resultado de la condición