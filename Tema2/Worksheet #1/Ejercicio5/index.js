var Fecha = new Date();

function Reloj()
{
    document.write(Fecha.toLocaleString() + "<br>");
    Fecha.setSeconds(Fecha.getSeconds() + 1);
}

setInterval(Reloj,1000);