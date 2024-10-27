//DECLARACIÓN DE VARIABLES
var hermanos = parseInt(prompt("Introduce tu número de hermanos")); //Declaración de variable que solicita al usuario la cantidad de hermanos y verifica que sea un int
var cantidad = parseInt(prompt("Introduce una cantidad"));  //Declaración de variable que solicita al usuario una cantidad y verifica que sea un int

//PROGRAMA
var condicion =
(hermanos >= 3) ? (cantidad * (15/100)) :
(hermanos > 0) && (hermanos < 3) ? (cantidad * (5/100)) :
"No tienes hermanos,no se te aplica un descuento";//Declara la condición para aplicar el descuento
document.write(condicion) //Imprime por pantalla el descuento