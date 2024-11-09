function suma()
{
    let total = 0;
    for(let i = 0; i < arguments.length; i++) 
    {
        total += arguments[i];
    }
    return total;
}

document.write(suma(1,"3",9.5));