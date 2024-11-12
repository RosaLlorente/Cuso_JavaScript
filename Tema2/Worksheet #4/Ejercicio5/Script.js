let Fecha;
window.onload = () =>
{
    Fecha = new Date();
    window.statusbar = (setInterval(Reloj,1000));
}
function Reloj()
{
    document.write(Fecha.toLocaleString() + "<br>");
    Fecha.setSeconds(Fecha.getSeconds() + 1);
}