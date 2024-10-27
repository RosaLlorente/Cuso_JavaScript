var a = parseInt(prompt("Introduce 'a'"));
var b = parseInt(prompt("Introduce 'b'"));
var c = parseInt(prompt("Introduce 'c'"));

var ecuacionPositiva = (-b + Math.sqrt((Math.pow(b,2) - (4 * a *c)))) / 2 * a;
var ecuacionNegativa = (-b - Math.sqrt((Math.pow(b,2) - (4 * a *c)))) / 2 * a;

document.write("Solución 1: " + ecuacionPositiva + "<br>" + "Solución 2: " + ecuacionNegativa);