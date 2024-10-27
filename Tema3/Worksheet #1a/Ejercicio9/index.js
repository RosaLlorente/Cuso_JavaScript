/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual(a,b)
{
    for(let i = 0;i <= a.length;i++)
    {
        if(a[i] != b[i])
        {
            return "No son iguales";
        }
    }
    return "Son iguales";
}

var a = [1, 4];
var b = [1, 4];

document.write(areArraysEqual(a,b));