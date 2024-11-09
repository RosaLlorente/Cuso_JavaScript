let NumeroParaAdivinar,NumeroIntroducido;

window.onload = function()
{
    NumeroParaAdivinar = parseInt(prompt("Jugador 1,introduce el numero para adivinar"));
    NumeroIntroducido = parseInt(prompt("Jugador 2,introduzca el número que cree que es"));
    do
    {
        if(NumeroIntroducido < NumeroParaAdivinar)
        {
            NumeroIntroducido = parseInt(prompt("El número es mayor"));
        }
        if(NumeroIntroducido > NumeroParaAdivinar)
        {
            NumeroIntroducido = parseInt(prompt("El número es menor"));
        }
    }while(NumeroParaAdivinar != NumeroIntroducido);
    document.write("USTED HA ACERTADO USE F5 PARA VOLVER A JUGAR");
}
