window.onload = () =>
{
    document.write('<a href="" onclick="' + cerrarVentana() + '">Cerrar la ventana</a><br>');
    Fecha = new Date();
    window.statusbar = (setInterval(Reloj,1000));
}