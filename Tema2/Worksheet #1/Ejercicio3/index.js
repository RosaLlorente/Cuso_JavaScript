function contador()
{
    let segundos = 60;
    do
    {
        document.write(segundos + "<br>");
        segundos--;
    }while(!(segundos === 0));
}

setTimeout(contador());