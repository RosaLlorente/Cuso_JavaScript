/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(numero,minimo,maximo)
{
    let resultado;
    for(let i = minimo; i <= maximo;i++)
    {
        numero === i ? resultado = true : resultado = false;
    }
    return resultado;
}

document.write("El número 2 esta dentro del rango: " + inRange(2,17,44));