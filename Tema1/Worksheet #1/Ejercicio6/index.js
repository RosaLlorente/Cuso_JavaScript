//DECLARACIÓN DE VARIABLES
var Variable1 = parseInt(prompt("Introduzca la primera variable"));//Solicita la primera variable al usuario a traves de una "alerta",además comprueba si el dato es un entero
var Variable2 = parseInt(prompt("Introduzca la segunda variable"));//Solicita la segunda variable al usuario a traves de una "alerta",además comprueba si el dato es un entero

//PROGRAMA
if(Variable1 > Variable2) //Declara la condición para que se ejecute el bloque de codigo
{
    document.write("El número " + Variable1 + " es mayor al número " + Variable2);
}
else if(Variable1 < Variable2)//Declara la condición para que se ejecute el bloque de codigo
{
    document.write("El número " + Variable1 + " es menor al número " + Variable2);
}
else//Declara la condición restante para que se ejecute el bloque de codigo
{
    document.write("El número " + Variable1 + " es igual al número " + Variable2);
}