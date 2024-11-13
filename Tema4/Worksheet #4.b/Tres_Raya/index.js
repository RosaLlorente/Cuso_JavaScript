let combinacionesGanadoras, jugadorActual, juegoActivo, Mensaje_ganador, puntuacion, puntuacionElementos, tablero;

window.onload = function() {
    combinacionesGanadoras = [  // Asegúrate de usar un arreglo bidimensional correcto
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columnas
        [0, 4, 8], [2, 4, 6]  // Diagonales
    ];
    jugadorActual = "X";
    juegoActivo = true;
    tablero = Array(9).fill(null);  // Vacia el tablero con 9 valores null
    puntuacion = [0, 0];  // Inicializa la puntuación

    Mensaje_ganador = document.getElementById("Ganador");
    puntuacionElementos = document.getElementsByTagName("b");

    document.getElementsByTagName('button')[0].addEventListener('click', reiniciarJuego);
    document.getElementsByTagName('button')[1].addEventListener('click', resetearJuego);

    puntuacionElementos[0].innerText = puntuacion[0];
    puntuacionElementos[1].innerText = puntuacion[1];

    Mensaje_ganador.innerText = "Comienza el jugador " + jugadorActual;
    document.querySelectorAll(".celda").forEach((celda, index) => {
        celda.addEventListener("click", () => manejarClicCelda(index));
    });
}

function manejarClicCelda(index) 
{
    Mensaje_ganador.innerText = "";

    if (!juegoActivo || tablero[index] !== null) // Comprueba si la celda esta vacía
    {  
        Mensaje_ganador.innerText = "No ha sido un movimiento valido,vuelva a intentarlo";
        return;  // Si no es un movimiento válido, no hacer nada
    }

    // Actualiza el estado de la celda
    tablero[index] = jugadorActual;
    document.querySelectorAll('.celda')[index].innerText = jugadorActual;

    if (verificarGanador()) 
    {
        Mensaje_ganador.innerText = "Ha ganado el jugador " + jugadorActual;
        jugadorActual === "X" ? puntuacion[0]++ : puntuacion[1]++;
        juegoActivo = false;
    } 
    else if (!tablero.includes(null)) //Comprueba si hay celdas vacias
    { 
        Mensaje_ganador.innerText = "¡Es un empate!";
        juegoActivo = false;
    } 
    else 
    {
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    }
}

function verificarGanador() {
    let ganador = false;  // Inicializa la variable ganador como falso
    for (let i = 0; i < combinacionesGanadoras.length; i++) 
    {
        const combinacion = combinacionesGanadoras[i];
        const a = combinacion[0];
        const b = combinacion[1];
        const c = combinacion[2];

        // Verifica que los tres valores de la combinación sean iguales y no sean null
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) 
        {
            ganador = true;  // Si los valores son iguales, se establece ganador como verdadero
            break;  // Sale del bucle una vez que se ha encontrado el ganador
        }
    }
    return ganador;  // Retorna si hay ganador o no
}


function reiniciarJuego() 
{
    tablero = Array(9).fill(null);  // Vuelve a vaciar el tablero
    juegoActivo = true;
    Mensaje_ganador.innerText = "Comienza el jugador " + jugadorActual;
    document.querySelectorAll('.celda').forEach(celda => celda.innerText = '');  // Limpia las celdas visualmente
}

function resetearJuego() 
{
    reiniciarJuego();
    jugadorActual = "X";  // Empieza el jugador X
    puntuacion = [0, 0];  // Resetea la puntuación
    puntuacionElementos[0].innerText = puntuacion[0];
    puntuacionElementos[1].innerText = puntuacion[1];
}
