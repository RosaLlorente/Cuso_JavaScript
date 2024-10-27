function potencias(base,potencia)
{
    if(potencia === 0)
    {
        return 1;
    }
    else
    {
        return  base * potencias (base,potencia - 1);
    }
}

document.write("El resultado es: " + potencias(2,4));