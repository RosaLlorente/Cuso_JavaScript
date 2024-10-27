var angulo = parseInt(prompt("Introduce un angulo"));
var anguloRadianes = anguloGrados * (Math.PI / 180);
var seno = Math.sin(anguloRadianes);
var coseno = Math.cos(anguloRadianes);
var tangente = Math.tan(anguloRadianes);

document.write("Seno: " + seno + "<br>");
document.write("Coseno: " + coseno + "<br>");
document.write("Tangente: " + tangente + "<br>");