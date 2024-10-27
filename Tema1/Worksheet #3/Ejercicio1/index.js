//DECLARACIÓN DE VARIABLES
var array = 
[
    "Serás un bombero en Granada, y estarás casado con María y tendrás 2 hijos",
    "Serás un policia en Almeria, y estarás casado con Pablo y tendrás N hijos",
    "Serás un escritor en Salamanca, y estarás casado con Alvarico y tendrás 4 hijos",
    "Serás un poeta en Madrid, y estarás casado con Belén y tendrás 7 hijos"
]; //Declara una varriable de tipo array que almacena las diferentes posibilidades.

//DECLARACIÓN DE FUNCIONES
function DileAlaSuerte(array) //Crea una función llamada DileAlaSuerte que toma un valor que sea un array.
{
    let numero = Math.floor(Math.random() * array.length);//Declara una variable local,que extrae un numero aleatorio entre el cero y el máximo de posiciones del array.
    return array[numero]; //Devuelve el valor del array de la posición aleatoria.
}

//PROGRAMA

for(let i = 0;i<3;i++)//Se crea un bucle for para que muestre tres resultados
{
    document.write(DileAlaSuerte(array) + "<br>");//Llama a la función y la imprime para mostrarlo por pantalla.
}