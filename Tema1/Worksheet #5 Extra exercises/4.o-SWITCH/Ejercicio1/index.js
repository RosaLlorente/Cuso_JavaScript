//DECLARACIÓN DE VARIABLES
var mes = prompt("Introduzca el nombre de un mes").toLowerCase(); //Variable que solicita al usuario un mes y lo pasa a minusculas para evitar errores
var mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1); //Le da el formato correcto al mes para la impresión por pantalla

//PROGRAMA
switch (mes) //Se declara un switch que toma de punto de referencia el mes introducido por el usuario
{
    case "enero": case "marzo": case "mayo": case "julio": case "agosto": case "octubre": case "diciembre": //Casos en que los meses tienen 31 días
        document.write(mes + " tiene 31 dias");
        break;

    case "abril": case "junio": case "septiembre": case "noviembre":  //Casos en que los meses tienen 30 días
        document.write(mes + " tiene 30 dias");
        break;

    case "febrero":  //Caso en que los meses tienen 29 días
        document.write(mes + " tiene 29 dias");
        break;

    default: //Caso en que el usuario no ha introducido un mes
        document.write("Mes inválido");
        break;
}