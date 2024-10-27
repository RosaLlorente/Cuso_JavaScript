//DECLARACIÓN DE VARIABLES
var edad = parseInt(prompt("Introduce tu edad")); //Declaración de variable que solicita al usuario la edad y verifica que sea un int

//PROGRAMA
var condicion =
(edad <= 5) ? "Jardín de infancia" : 
(edad >= 6) && (edad <= 11) ? "Primaria" : 
(edad >= 12) && (edad <= 16) ? "ESO" : 
(edad >= 17) && (edad <= 21) ? "	Bachillerato	o	Ciclos" :
"Universidad";//Declara la condición para saber el curso academico

document.write("Estas en " + condicion); //Imprime por pantalla el curso