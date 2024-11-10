window.onload = () =>
{
    var Cadena = "Limpiaparabrisas"
    var Aparicion = "para";
    console.log(encontrarTodasLasApariciones(Cadena, Aparicion));
}
function encontrarTodasLasApariciones(Cadena,Aparicion)
{
    var Posicionletra = [];
    var Posiciones = Cadena.indexOf(Aparicion);
    while (Posiciones !== -1) {
        Posicionletra.push(Posiciones);
        Posiciones = Cadena.indexOf(Aparicion, Posiciones + 1); 
    }
    return Posicionletra;
}