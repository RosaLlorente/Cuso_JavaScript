let Fecha;
window.onload = () =>
{
    document.write('<a href="" onclick="' + cerrarVentana() + '">Cerrar la ventana</a><br>');
    document.write('<a href="" onclick="' + segundoPlano() + '">Mover a segundo plano</a><br>');
    document.write('<a href="" onclick="' + moverVentana() + '">mover la ventana</a><br>');
    document.write('<a href="" onclick="' + cambiarTamano() + '">cambiar tamaño de la ventana</a><br>');
    
    Fecha = new Date();
    window.statusbar = (setInterval(Reloj,1000));
}

function Reloj()
{
    document.write(Fecha.toLocaleString() + "<br>");
    Fecha.setSeconds(Fecha.getSeconds() + 1);
}

function cerrarVentana() 
{
    window.close();//Cerrar ventana
}

function segundoPlano() 
{
    window.blur();  // Pasar la ventana a segundo plano
}

function moverVentana() 
{
    window.moveTo(300, 300);//mover la ventana a la posición (300, 300)
}

function cambiarTamano() 
{
    window.resizeTo(200, 200);//cambiar el tamaño de la ventana a 200x200 píxeles
}