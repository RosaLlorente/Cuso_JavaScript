//DECLARACIÓN DE VARIABLES
var Nota = parseInt(prompt("Introduce una nota"));//Se declara la variable y solicita al usuario el dato,además comprueba si el dato es un entero

//PROGRAMA
switch(Nota) //Declaración del switch con su respectivo atributo para calificar
{
    case 1:
    case 2:
    case 3:
    case 4://Declaración de las diferentes opciones
        document.write("Es un suspenso");//Imprime la respuesta a las opciones
        break;//Sentencia que finaliza el swicht al terminar el bloque de codigo
    case 5:
    case 6://Declaración de las diferentes opciones
        document.write("Es un aprobado");//Imprime la respuesta a las opciones
        break;//Sentencia que finaliza el swicht al terminar el bloque de codigo
    case 7:
    case 8://Declaración de las diferentes opciones
        document.write("Es un notable");//Imprime la respuesta a las opciones
        break;//Sentencia que finaliza el swicht al terminar el bloque de codigo
    case 9:
    case 10://Declaración de las diferentes opciones
        document.write("Es un sobresaliente");//Imprime la respuesta a las opciones
        break;//Sentencia que finaliza el swicht al terminar el bloque de codigo
    default://Declaración de las opciones restantes
        document.write("No se ha introducido un caracter numerico o no es una opción valida");//Imprime la causa del error
        break; //Sentencia que finaliza el swicht al terminar el bloque de codigo
}