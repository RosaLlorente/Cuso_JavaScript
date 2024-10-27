//DECLARACIÓN DE VARIABLES
var numero = parseInt(prompt("Número de veces a repetir")); //Variable que solicita al usuario un número y verifica que sea entero
var texto = prompt("Introduzca el texto"); //Variable que solicita al usuario un texto

//FUNCIONES
function RepetirTexto(veces,texto) //Declaración de función RepetirTexto;Repetira el texto tantas veces como desee el usuario
{
    for(let i=1;i <= veces;i++) //Bucle for con inicio 1 y limite elo número de veces de repeticiones deseadas por el usuario
    {
        document.write(texto + "<br>"); //Impresión por pantalla
    }
}

//PROGRAMA
RepetirTexto(numero,texto); //Llamada de la función RepetirTexto