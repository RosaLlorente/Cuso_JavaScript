/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */


function isOdd(numero)
{
    let resultado;
    numero / 2 == 0 ? resultado = false : resultado = true;
    return resultado;
}

document.write("El número 15 es impar: " + isOdd(15));