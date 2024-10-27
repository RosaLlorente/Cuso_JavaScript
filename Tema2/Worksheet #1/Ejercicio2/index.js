var fechaHoy = new Date();
var fecha85 = new Date(fechaHoy);
var fecha187 = new Date(fechaHoy);

fecha85.setDate(fecha85.getDate() + 85)
fecha187.setDate(fecha187.getDate() - 187);

fecha85.setDate(fecha85.getFullYear() + 2);
fecha187.setDate(fecha187.getHours() - 24);

var fecharesto = fecha85 - fecha187;

document.write("Fecha hoy: " + fechaHoy.toLocaleDateString() + "<br>");
document.write("Fecha 85: " + fecha85.toLocaleDateString() + "<br>");
document.write("Fecha 187: " + fecha187.toLocaleDateString() + "<br>");
document.write("Fecha resto: " + fecharesto + " milisegundos<br>");