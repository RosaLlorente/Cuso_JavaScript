window.onload = () => 
{
    document.write(ordenarTipo("hola mundo que tal"));
}

function ordenarTipo(Cadena) 
{
    let vocales = "aeiouAEIOU";
    let cadenaVocales = "";
    let cadenaConsonantes = "";

    for (let i = 0; i <= Cadena.length; i++) 
    {
        if (Cadena[i] !== ' ')
        {  
            if (vocales.includes(Cadena[i])) 
            {
                cadenaVocales += Cadena[i];
            } 
            else 
            {
                cadenaConsonantes += Cadena[i];
            }
        }   
    }
    return cadenaConsonantes + cadenaVocales;
}
