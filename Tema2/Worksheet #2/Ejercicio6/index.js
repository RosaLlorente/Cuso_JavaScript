var base = parseInt(prompt("Introduzca la base de la potencia"));
var potencia = parseInt(prompt("Introduzca la potencia de la base"));
var resultado = Math.pow(base,potencia);

document.write(base + "^" + potencia + " = " + resultado);