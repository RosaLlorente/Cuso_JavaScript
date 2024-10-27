//FUNCIONES
function operaciones(operacion)  //Declaración de función operaciones;Realiza la operación deseada por el usuario
{
    let numero1 = parseInt(prompt("Introduce un número")); //Variable que solicita al usuario un número y verifica que sea entero
    let numero2 = parseInt(prompt("Introduce un número")); //Variable que solicita al usuario un número y verifica que sea entero
    let resultado = 0 //Variable que almacena el resultado
    let resultadoDiv; //Variable que almacena el formato de salida del resultado
    switch(operacion) //Declaración de switch que toma de referencia la operación
    {
        case "suma":
            resultado = numero1 + numero2; //Realiza la suma
            resultadoDiv = numero1 + " + " + numero2 + " = " + resultado; //Formato de salida del resultado
            break;
        case "resta":
            resultado = numero1 - numero2;//Realiza la resta
            resultadoDiv = numero1 + " - " + numero2 + " = " + resultado; //Formato de salida del resultado
            break;
            case "multiplicacion":
            resultado = numero1 * numero2;//Realiza la multiplicacion
            resultadoDiv = numero1 + " * " + numero2 + " = " + resultado; //Formato de salida del resultado
            break;
        case "division":
            resultado = numero1 / numero2;//Realiza la division
            resultadoDiv = numero1 + " / " + numero2 + " = " + resultado; //Formato de salida del resultado
            break;
        default:
            resultadoDiv = "Operación no válida"; //No es valida la opción
        
    }
    return resultadoDiv; //Devuelve el formato de salida
    
}

//PROGRAMA
document.getElementById("suma").addEventListener("click",function(){document.write(operaciones("suma"))}); //Identifica el elemento por la id y añade como evento al realizar click en el boton la impresión del resultado de la función operaciones
document.getElementById("resta").addEventListener("click",function(){document.write(operaciones("resta"))}); //Identifica el elemento por la id y añade como evento al realizar click en el boton la impresión del resultado de la función operaciones
document.getElementById("multiplicacion").addEventListener("click",function(){document.write(operaciones("multiplicacion"))}); //Identifica el elemento por la id y añade como evento al realizar click en el boton la impresión del resultado de la función operaciones
document.getElementById("division").addEventListener("click",function(){document.write(operaciones("division"))}); //Identifica el elemento por la id y añade como evento al realizar click en el boton la impresión del resultado de la función operaciones