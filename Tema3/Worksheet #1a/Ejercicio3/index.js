/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers)
{
    let number = numbers[0];
    for(i=0;i <= numbers.length;i++)
    {
        if(number < numbers[i])
        { 
            number = numbers[i];
        }
    }
    return number;
}
var numbers = [1,5,2,3,4];
document.write("El número más grande es: " + getBiggestNumber(numbers));