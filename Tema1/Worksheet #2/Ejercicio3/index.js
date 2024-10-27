//DECLARACIÓN DE VARIABLES
var Radio = parseInt(prompt("Introduce el radio deseado"))//Declaración de variable y solicitud del dato al usuario,además verifica si es un entero
var Circuferencia = 0; //Declaración de variable inicializada
var Area = 0; //Declaración de variable inicializada

//PROGRAMA
Circuferencia = 2 * Math.PI * Radio; //Realiza el calculo de la circuferencia utilizando la formula matematica,llamando al metodo "PI" para tener el valor exacto de este número irracional
document.write("La circuferencia es " + Circuferencia + "<br>");//Imprime el resultado de la circuferencia por pantalla
Area = Math.PI * Math.pow(Radio,2);//Realiza el calculo del área la circuferencia utilizando la formula matematica,llamando al metodo "PI" para tener el valor exacto de este número irracional y al metodo "pow" que realiza potencias
document.write("El área de la circuferencia es " + Area + " metros cuadrados");