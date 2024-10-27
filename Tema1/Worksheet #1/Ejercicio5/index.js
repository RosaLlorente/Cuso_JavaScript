//DECLARACIÓN DE VARIABLES
var Variable1 = parseInt(prompt("Introduzca la primera variable"));//Solicita la primera variable al usuario a traves de una "alerta",además comprueba si el dato es un entero
var Variable2 = parseInt(prompt("Introduzca la segunda variable"));//Solicita la segunda variable al usuario a traves de una "alerta",además comprueba si el dato es un entero
var suma = 0; //Inicializa la variable para hacer la operación

//PROGRAMA
document.write("El valor de la primera variable es: " + Variable1 + "<br>");//Imprime el valor de la primera variable
document.write("El valor de la segunda variable es: " + Variable2 + "<br>");//Imprime el valor de la segunda variable
suma += Variable1 + Variable2; //Realiza la suma almacenandola en su variable respectiva
document.write("La suma es: " + suma); //Imprime el resultado de la suma