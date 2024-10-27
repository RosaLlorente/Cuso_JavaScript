//DECALRACIÓN DE VARIABLES
var edadActual = parseInt(prompt("Introduce tu edad actual"));//Declara la variable y solicita al usuario el dato,además verifica que sea un entero
var edadMax = 100;//Declara la variable que almacena el dato
var CantidadRefrigerio = parseInt(prompt("Introduce la cantidad de refrigerio que consumirias al dia"));//Declara la variable y solicita al usuario el dato,además verifica que sea un entero
var calculo = 0; //Inicializa la variable
var añosRestantes //Años que quedan de vida

//PROGRAMA
if(edadActual <= edadMax) //Se realiza una condición para el manejo de errores
{
    añosRestantes = (edadMax - edadActual) * 360; //Calcula los años restantes de vida y los pasa a dias
    calculo = añosRestantes * CantidadRefrigerio; //Calcula la cantidad de refrigerios por los dias calculados
    document.write("Consumiras " + calculo + " refrigerios en lo que te queda de vida");//Imprime en pantalla un mensaje de cantidad de los refrigerios por los dias calculados
}
else
{
    document.write("Edad invalida;no puede superar más de " + edadMax + "años."); //Controla que el usuario inserte una edad logica en el código
}