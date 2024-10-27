//DECLARACIÓN DE VARIABLES
var TemperaturaC = parseFloat(prompt("Introduce la temperatura en grados Cº"));//Declara la variable y solicita al usuario el dato,además verifica que sea un float
var TemperaturaF = parseFloat(prompt("Introduce la temperatura en grados Fº"));//Declara la variable y solicita al usuario el dato,además verifica que sea un float
var PasoF = 0; //Declara e inicializa la variable para pasasr a Fahrenheit
var PasoC = 0; //Declara e inicializa la variable para pasasr a Celsius 

//PROGRAMA
PasoF = (TemperaturaC * (9/5)) + 32; //Realiza el calculo utilizando la formula
document.write(TemperaturaC + "°C es " + PasoF + "ºF <br>"); //Imprime el resultado por pantalla
PasoC = (TemperaturaF - 32) * (5/9); //Realiza el calculo utilizando la formula
document.write(TemperaturaF + "°F es " + PasoC + "ºC <br>"); //Imprime el resultado por pantalla
