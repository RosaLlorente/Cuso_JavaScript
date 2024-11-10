window.onload = () =>
{
    var array1 = [1,2,3,5,6];
    var array2 = ["a","b"];
    var array3 = ["a3",89,"3940",1.1];
    document.write(combineAllArrays(array1,array2,array3));
}

function combineAllArrays()
{
    let array = [];
    for(i = 0;i < arguments.length;i++)
    {
        array =  array.concat(arguments[i]);
    }
    return array;
}