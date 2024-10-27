//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Introduce un número")); //Variable que solicita al usuario un número y verifica que sea un entero

//PROGRAMA
for(let i = numero; i <= 100;i++) //Declaración de bucle for de inicio el número introducido y de limite 100
{
    document.write(i + "<br>"); //Impresión por pantalla
}