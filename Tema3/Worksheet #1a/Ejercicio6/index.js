/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor()
{
    let opciones = ["rock","paper","scissor"];
    let numero = Math.floor(Math.random() * opciones.length);
    return opciones[numero];
}

document.write(getRockPaperScissor());