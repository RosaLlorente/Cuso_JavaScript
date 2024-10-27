function lanzamiento()
{
    let numero = Math.floor(Math.random() * 6 + 1);
    return numero;
}

document.write("¡El dado ha sido lanzado!: " + lanzamiento());