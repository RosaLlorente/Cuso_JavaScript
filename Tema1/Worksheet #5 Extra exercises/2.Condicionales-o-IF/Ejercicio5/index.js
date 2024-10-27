//DECLARACIÓN DE VARIABLES
var nombre = prompt("Introduce un nombre").toLocaleLowerCase(); //Declaración de variable que solicita al usuario su nombre y usa la función "toLowerCase" para evitar problemas de entrada de datos

//PROGRAMA
var condicion = (nombre === "pablo" || nombre === "eduardo") ? "Bienvenido" : (nombre === "ana" || nombre === "clara") ? "Bienvenida" : "No tienes acceso"; //Variable que almacena la condición para dar acceso
document.write(condicion); //Salida por pantalla del resultado de la condición