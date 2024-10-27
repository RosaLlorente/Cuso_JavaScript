//DECLARACIÓN DE VARIABLES
var palabra,palabraMayus;//Declaración de variable que almacena la palabra en ambos formatos

//PROGRAMA
do{
    palabra = prompt("Introduzca su palabra") ////Solicita al usuario una palabra
    document.write(palabra + "<br>"); //Impresión por pantalla
    palabraMayus = palabra.toUpperCase(); //Pasa las palabras en mayuscula para identificar la palabra clave
}while(!(palabraMayus == "SALIR")) //Finaliza el bucle al introducir