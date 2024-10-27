//DECLARACIÓN DE VARIABLES
var lugar = prompt("Introduce tu donde vives").toLocaleLowerCase(); //Declaración de variable que solicita al usuario su lugar de vivienda y usa la función "toLowerCase" para evitar problemas de entrada de datos
var edad = parseInt(prompt("Introduce tu edad")); //Declaración de variable que solicita al usuario su edad y verifica que sea un int

//PROGRAMA
var condicion = (lugar === "madrid") && ((edad >= 18) || (edad <= 30)) ? "Puedes acceder al carnet de empresarios emprendedores" : "No puedes acceder";  //Variable que almacena la condición para dar acceso
document.write(condicion); //Salida por pantalla del resultado de la condición