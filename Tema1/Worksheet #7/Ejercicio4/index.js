window.onload = () =>
{
    array1 = [1,2,3]
    array2 = [4,5,6,1];
    document.write(combineTwoArrays(array1,array2));
}
function combineTwoArrays(array1,array2)
{
    return array1.concat(array2);
}