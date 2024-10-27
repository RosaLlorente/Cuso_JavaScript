//DECLARACIÓN DE VARIABLES
var numero; //Declaración de variable que almacena el número

//PROGRAMA
do
{
    numero = parseInt(prompt("Introduce un número")); //Solicita al usuario un número y verifica que sea un entero
    document.write(numero + "<br>"); //Impresión por pantalla
}while(!numero == 0) //Finaliza el bucle al introducir 0