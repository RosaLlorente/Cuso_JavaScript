//DECLARACIÓN DE VARIABLES
var numero1 = parseInt(prompt("Introduzca un número")); //Variable que solicita al usuario un número y verifica que sea un entero
var numero2 = parseInt(prompt("Introduzca un número")); //Variable que solicita al usuario un número y verifica que sea un entero
var operacion = prompt("Introduce la operación en base a un caracter"); //Variable que solicita al usuario un caracter para operar
var solucion;

//PROGRAMA
switch(operacion) //Se declara un switch que toma de punto de referencia la operación introducida por el usuario
{
    case "+": //Caso de suma
        solucion = numero1+numero2; //Variable que realiza la operación y la almacena
        document.write(numero1 + " + " + numero2 + " = " + solucion);
        break;
    case "-": //Caso de resta
        solucion = numero1-numero2; //Variable que realiza la operación y la almacena
        document.write(numero1 + " - " + numero2 + " = " + solucion);
        break;
    case "*": //Caso de multiplicación
    solucion = numero1*numero2; //Variable que realiza la operación y la almacena
    document.write(numero1 + " * " + numero2 + " = " + solucion);
    break;
    case "/": //Caso de división
        solucion = numero1/numero2; //Variable que realiza la operación y la almacena
        document.write(numero1 + " / " + numero2 + " = " + solucion);
        break;
}