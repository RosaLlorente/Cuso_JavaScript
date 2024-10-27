/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors,length)
{
    let numero = 0;
    let String = "";
    for(var i = 0;i <= length;i++)
    {
        if(numero > colors.length - 1)
        {
            numero = -1;
            i --;
        }
        else
        {
            String += colors[numero] + " ";
        }
        numero++;
    }
    return String;
}

var colors = ["rojo","azul","magenta"];
document.write(getRandomColorSequence(colors,7));