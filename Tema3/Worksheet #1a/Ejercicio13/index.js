/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(arr)
{
    let uniqueArray = arr.filter((valor, indice)=> arr.indexOf(valor)===indice);
    return uniqueArray;
}

arr = [4, 5, 10, 4, 10, 2];
document.write(removeDuplicates(arr));