//DECLARACIÓN DE VARIABLES
var edad = parseInt(prompt("Introduce tu edad")); //Declaración de variable que solicita al usuario la edad y verifica que sea un int

//PROGRAMA
var condicion = edad >= 67 ? "Te puedes jubilar" : "No te puedes jubilar";//Declara la condición para saber si puedes jubilarte
document.write(condicion);//Imprime por pantalla la respuesta