//DECLARACIÓN DE VARIABLES
var AñoNacimiento = parseInt(prompt("Introduce tu edad actural"));//Declara la variable y solicita al usuario el dato,además verifica que sea un int
var FechaActutal = new Date();//Declara la variable del año actual usando el metodo Date
var edad1 = 0,edad2 = 0; //Declara las variables de edad donde se guardara el resultado

//PROGRAMA
edad1 = FechaActutal.getFullYear() - AñoNacimiento; //Calcula la edad 1 extrayendo el año de la fecha actual con el metodo getFullYear()
edad2 = edad1 - 1; //Calcula la edad 2 que le resta un año por si la persona no ha cumplido años aun

//SALIDA POR PANTALLA
document.write("Tu edad es de " + edad1 + " o " + edad2 + " años.");//Muestra por pantalla un mensaje con la posibles edades