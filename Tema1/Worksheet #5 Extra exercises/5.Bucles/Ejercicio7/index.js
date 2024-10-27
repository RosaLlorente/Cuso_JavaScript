//DECLARACIÓN DE VARIABLES
var NumeroSecreto = parseInt(prompt("Introduzca que debe adivinar el jugador 2 número")); // Variable que solicita al usuario un número y verifica que sea un entero
var numero,condicion; //Declaración de variable que almacena el número y la condición de pistas
var intentos = 0; //Declaración de variable que almacena los intentos del jugador 2

//PROGRAMA
do
{
    numero = parseInt(prompt("Introduzca un número. " + condicion)); // Solicita al usuario un número y verifica que sea un entero
    condicion = numero < NumeroSecreto ? " El número secreto es mayor":" El número secreto es menor"; //Condición para dar la pista
    intentos += 1; //Almacena los intentos
}while(!(numero === NumeroSecreto)); //Finalización del bucle cuando el número sea igual
document.write("¡Felicidades has acertado! Has realizado " + intentos + " intentos.") //Impresión por pantalla