//DECLARACIÓN DE VARIABLES
var nombre = prompt("Introduce tu nombre").toLowerCase(); //Declaración de variable que solicita al usuario el nombre y usa la función "toLowerCase" para evitar problemas de caracteres
var apellidos = prompt("Introduce tus apellidos"); //Declaración de variable que solicita al usuario los apellidos

//PROGRAMA
var nombrecapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(); //Le da el formato correcto al nombre
var condición = nombre === "ricardo" ? alert( nombrecapitalizado + " " + apellidos) : document.write(apellidos); //Declara la condición para verificar a Ricardo