//DECLARACIÓN DE VARIABLES
const Original = document.getElementById("original");
const Texto = document.getElementById("nuevotexto");
const Cambiar = document.getElementById("Boton");

//PROGRAMA
Cambiar.addEventListener("click",function()
{
    const nuevotexto = Texto.value;
    Original.innerHTML = nuevotexto;
})