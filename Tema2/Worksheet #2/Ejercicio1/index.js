var numero1 = Math.floor(Math.random());
var numero2 = Math.floor(Math.random() * (200 - 100) + 100);
var minimo = parseInt(prompt("Introduce el número minimo que puede tocar"));
var maximo = parseInt(prompt("Introduce el número máximo que puede tocar"));
var numero3 =Math.floor(Math.random() * (maximo - minimo) + minimo);

document.write(numero1 + "<br>");
document.write(numero2 + "<br>");
document.write(numero3 + "<br>");