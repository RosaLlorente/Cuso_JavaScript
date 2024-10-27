//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Introduzca un número")); // Variable que solicita al usuario un número y verifica que sea un entero
var multiplicacion = 0; //Declaración de variable que almacena la multiplicación

//PROGRAMA
for(let i = 0;i <= 10;i++)
{
    multiplicacion = numero * i; //Realiza la multiplicación
    document.write(numero + " x " + i + " = " + multiplicacion + "<br>");  //Impresión por pantalla
}