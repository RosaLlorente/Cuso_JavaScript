//DECLARACIÓN DE VARIABLES
var numero; //Declaración de variable que almacena el número
var suma = 0; //Declaración de variable que almacena la suma total

//PROGRAMA
for(let i = 1;i <= 10;i++)
{
    numero = parseInt(prompt("Introduce el " + i + " número")); //Solicita al usuario un número y verifica que sea un entero
    suma += numero; //Realiza la suma total
    i == 10 ? document.write(numero + " = "):document.write(numero + " + "); //Impresión por pantalla con la condición que en el flujo 10 use el signo "="
}
document.write(suma); //Impresión por pantalla de la suma total