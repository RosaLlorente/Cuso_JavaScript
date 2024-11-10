window.onload = () =>
{
    document.write(onlyUniques(1,2,46,7,43,2));
}
function onlyUniques ()
{
    let array = [];
    for(i=0;i < arguments.length;i++)
    {
        array.push(arguments[i]);
    }
    return array;
}