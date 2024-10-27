function máximo(valor1,valor2,valor3,valor4)
{
    var maximo;
    (valor1 > valor2 && valor1 > valor3 && valor1 > valor4) ? maximo = valor1 + " es el máximo."
    : (valor2 > valor1 && valor2 > valor3 && valor2 > valor4) ? maximo = valor2 + " es el máximo."
    : (valor3 > valor2 && valor3 > valor1 && valor3 > valor4) ? maximo = valor3 + " es el máximo."
    : maximo = valor4 + " es el máximo."
    return maximo;
}

document.write(máximo(1,234,35455,433));