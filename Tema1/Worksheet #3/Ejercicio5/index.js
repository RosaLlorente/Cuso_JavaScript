//DECLARACIÓN DE VARIABLES
var Celsius = 0; //Variable que almacena los grados Celsius 
var Fahrenheit = 32; //Variable que almacena los grados Fahrenheit 

//FUNCIONES
//Declaración de la función celsiusToFahrenheir;se encargara de pasar los grados Celsius a  Fahrenheit
function celsiusToFahrenheir(Celsius)
{
    let Fahrenheit =((9/5) * Celsius) + 32; //Variable local que pasa los grados Celsius a  Fahrenheit
    return Celsius + " Celsius son " + Fahrenheit + " Fahrenheit"; //Devuelve una cadena de caracteres con los grados Fahrenheit.
}
//Declaración de la función fahrenheitToCelsius;se encargara de pasar los grados Fahrenheit a Celsius
{
    let Celsius =(9/5) *(Fahrenheit - 32); //Variable local que pasa los grados Fahrenheit a Celsius
    return Fahrenheit + " Fahrenheit son " + Celsius + " Celsius"; //Devuelve una cadena de caracteres con los grados Celsius.
}

//PROGRAMA
document.write(celsiusToFahrenheir(Celsius) + "<br>"); //Llamada de la función celsiusToFahrenheir y salida por pantalla del resultado
document.write(fahrenheitToCelsius(Fahrenheit)); //Llamada de la función fahrenheitToCelsius y salida por pantalla del resultado