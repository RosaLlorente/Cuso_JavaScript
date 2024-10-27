//DECLARACIÓN DE VARIABLES
var edad = parseInt(prompt("Introduce tu edad")); //Variable que solicita al usuario la edad y verifica que sea un int
var localidad = prompt("Introduce tu localidad de nacimiento"); //Variable que solicita al usuario la localidad de nacimiento

//PROGRAMA
var condicion = (edad > 25) && (localidad.toLowerCase() === "madrid") ? "Enorabuena" : "No apto";//Variable que guarda la condición para que diga si es apto o no y usa la función "toLowerCase" para evitar problemas de variables de caracteres
document.write(condicion); //Muestra por pantalla el resultado