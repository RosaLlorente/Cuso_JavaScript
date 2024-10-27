/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(file)
{
    let string = file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
    return string;
}

var file = "imagen.jpg";
document.write(getFileExtension(file));