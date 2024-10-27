function volumen(radio)
{
    let volumen = (4/3) * Math.PI * Math.pow(radio,3);
    return volumen;
}

let radio = parseInt(prompt("Inserte el radio"));
document.write("El volumen de la esfera es igual a " + volumen(radio) + " metros cubicos");
