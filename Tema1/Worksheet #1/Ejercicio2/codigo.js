//PROGRAMA
document.write("Hola mundo<br>"); //Imprime el mensaje "Hola mundo"
document.write("Soy el primer script<br>") //Imprime el mensaje "Soy el primer script"
if(!navigator.javaEnabled) //Reafirma si el navegador lo soporta o no(al ejecutarse el codigo ya da de por si que es capaz de sopotarlo)
{
    document.write("El navegador no soporta javaScript")//Imprime el anuncio de que no es capaz de ejecutarlo
}
else
{
    document.write("El navegador soporta javaScript")//Imprime el anuncio de que es capaz de ejecutarlo
}