//DECLARACION DE VARIABLES
const imagen = document.getElementById("imagen")
const Reducir = document.getElementById("Reducir");


//PROGRAMA
Reducir.addEventListener("click",function(){
    let anchoactual = imagen.width;
    let altoactual = imagen.height;
    if (anchoactual > 5 && altoactual > 5) 
    {
        imagen.width = anchoactual - 5;
        imagen.height = altoactual - 5;
    } 
    else 
    {
        alert("El tamaño de la imagen no puede ser menor que 0.");
    }
})
