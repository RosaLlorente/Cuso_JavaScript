//DECLARACIÓN DE VARIABLES
var añoActual = 2024;//Declara la variable del año actual y guarda el dato
var añoNacimiento = parseInt(prompt("Introduce tu edad de nacimiento"));//Declara la variable y solicita al usuario su año de nacimiendo,además comprueba si es un entero
var edad1 = 0;//Inicializa la variable en la que se operara
var edad2 = 0;//Inicializa la variable en la que se operara

//PROGRAMA
edad1 += añoActual - añoNacimiento;//Realiza el calculo 
edad2 += edad1 - 1;//Le resta uno por si el usuario todavia no ha cumplido años

document.write("Tu edad es " + edad1 + " o " + edad2);//Imprime por pantalla la respuesta de su edad