function contador()
{
    let segundos = 60;
    do
    {
        document.write(segundos + "<br>");
        segundos--;
    }while(!(segundos < 0));
    if(segundos == 0)
    {
        location.href = "https://www.google.com";
    }
}

setTimeout(contador(),1000);