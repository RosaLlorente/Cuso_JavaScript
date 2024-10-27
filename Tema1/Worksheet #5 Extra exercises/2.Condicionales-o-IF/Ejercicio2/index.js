//DECLARACIÓN DE VARIABLES
var edad = parseInt(prompt("Introduce tu edad")); //Variable que solicita al usuario la edad y verifica que sea un int

//PROGRAMA

var condicion = edad < 18 ? " eres menor de edad." : " eres mayor de edad."; //Variable que guarda la condición para que diga si es mayor de edad o no
document.write("Tu edad es " + edad + " significa que " + condicion); //Muestra por pantalla el resultado