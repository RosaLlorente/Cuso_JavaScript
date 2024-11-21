window.onload = () => {
    const svgPadre = document.querySelector("svg");
    const limiteX = 1000;
    const limiteY = 500;

    // Variables de puntuación y elementos HTML
    let puntuacionJugador1 = 0;
    let puntuacionJugador2 = 0;
    const spanJugador1 = document.querySelectorAll("p span")[0];
    const spanJugador2 = document.querySelectorAll("p span")[1];

    spanJugador1.textContent = puntuacionJugador1;
    spanJugador2.textContent = puntuacionJugador2;

    var Pelota = new pelota(50, 50, 3, 3, limiteX, limiteY, 10, svgPadre, actualizarPuntuacion);
    var rectangulo1 = new Rectangulo(0, 200, 30, 100, svgPadre);
    var rectangulo2 = new Rectangulo(970, 200, 30, 100, svgPadre);

    Pelota.mover([rectangulo1, rectangulo2]);

    MusicaFondo();

    document.addEventListener("keydown", (event) => 
    {
        if (event.key === "w") 
        {
            if (rectangulo1.posicionY > 0) 
            {
                rectangulo1.posicionY -= 10;
                rectangulo1.actualizarPosicion();
            }
        } 
        else if (event.key === "s") 
        {
            if (rectangulo1.posicionY + rectangulo1.alto < limiteY) 
            {
                rectangulo1.posicionY += 10;
                rectangulo1.actualizarPosicion();
            }
        } 
        else if (event.key === "ArrowUp") 
        {
            if (rectangulo2.posicionY > 0) 
            {
                rectangulo2.posicionY -= 10;
                rectangulo2.actualizarPosicion();
            }
        } 
        else if (event.key === "ArrowDown")
            {
            if (rectangulo2.posicionY + rectangulo2.alto < limiteY) 
            {
                rectangulo2.posicionY += 10;
                rectangulo2.actualizarPosicion();
            }
        }
    });

    function actualizarPuntuacion(jugador)
    {
        if (jugador === 1) 
        {
            puntuacionJugador1++;
            spanJugador1.textContent = puntuacionJugador1;
        } 
        else if (jugador === 2) 
        {
            puntuacionJugador2++;
            spanJugador2.textContent = puntuacionJugador2;
        }
        SonidoPunto();
    }
};
class pelota 
{
    constructor(posicionX, posicionY, velocidadx, velocidady, limiteX, limiteY, radio, svgPadre, actualizarPuntuacionCallback) 
    {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidadx = velocidadx;
        this.velocidady = velocidady;
        this.limiteX = limiteX;
        this.limiteY = limiteY;
        this.radio = radio;
        this.actualizarPuntuacion = actualizarPuntuacionCallback;
        this.crearTag(svgPadre);
    }

    crearTag(svgPadre) 
    {
        this.pelota = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.pelota.setAttribute("cx", this.posicionX);
        this.pelota.setAttribute("cy", this.posicionY);
        this.pelota.setAttribute("r", this.radio);
        this.pelota.setAttribute("stroke", "black");
        this.pelota.setAttribute("stroke-width", 1);
        this.pelota.setAttribute("fill", color());
        svgPadre.appendChild(this.pelota);
    }

    mover(rectangulos) 
    {
        setInterval(() => 
        {
            this.posicionX += this.velocidadx;
            this.pelota.setAttribute("cx", this.posicionX);

            this.posicionY += this.velocidady;
            this.pelota.setAttribute("cy", this.posicionY);

            if ((this.posicionY + this.radio) > this.limiteY || (this.posicionY - this.radio) < 0) 
            {
                this.velocidady *= -1;
                SonidoPelota();
            }

            if (this.posicionX - this.radio < 0) 
            {
                // Punto para jugador 2
                this.actualizarPuntuacion(2);
                this.reiniciar();
            } 
            else if (this.posicionX + this.radio > this.limiteX) 
            {
                // Punto para jugador 1
                this.actualizarPuntuacion(1);
                this.reiniciar();
            }

            rectangulos.forEach((rect) => 
            {
                if (this.posicionX - this.radio < rect.posicionX + rect.ancho && this.posicionX + this.radio > rect.posicionX && this.posicionY + this.radio > rect.posicionY && this.posicionY - this.radio < rect.posicionY + rect.alto) 
                {
                    this.velocidadx *= -1;
                    SonidoPelota();
                }
            });
        }, 20);
    }

    reiniciar() 
    {
        this.posicionX = this.limiteX / 2;
        this.posicionY = this.limiteY / 2;
        this.velocidadx *= -1; // Cambia dirección de la pelota
        this.pelota.setAttribute("cx", this.posicionX);
        this.pelota.setAttribute("cy", this.posicionY);
    }
}

class Rectangulo 
{
    constructor(posicionX, posicionY, ancho, alto, svgPadre) 
    {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.ancho = ancho;
        this.alto = alto;
        this.crearTag(svgPadre);
    }

    crearTag(svgPadre) 
    {
        this.rectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rectangulo.setAttribute("x", this.posicionX);
        this.rectangulo.setAttribute("y", this.posicionY);
        this.rectangulo.setAttribute("width", this.ancho);
        this.rectangulo.setAttribute("height", this.alto);
        this.rectangulo.setAttribute("stroke", "black");
        this.rectangulo.setAttribute("stroke-width", 1);
        this.rectangulo.setAttribute("fill", color());
        svgPadre.appendChild(this.rectangulo);
    }
    actualizarPosicion() 
    {
        this.rectangulo.setAttribute("y", this.posicionY);
    }
}

function color() 
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}
function MusicaFondo() 
{
    var KeySound = new Audio('Sonido/Patty no Theme.mp3');
    KeySound.play();
    KeySound.loop = true;
    KeySound.volume = 0.08;
    document.body.addEventListener('keydown', () => 
    {
        KeySound.play().catch((error) => console.error("Error reproduciendo el sonido:", error));
    });
}
function SonidoPelota() 
{
    var KeySound = new Audio('Sonido/ping-pong-ball-100074 (mp3cut.net).mp3');
    KeySound.play();
    KeySound.volume = 2.0;
}
function SonidoPunto() 
{
    var KeySound = new Audio('Sonido/retro-blip-236676.mp3');
    KeySound.play();
    KeySound.volume = 1.0;
}