window.onload = () =>
{
    document.write(addOnlyNums(1,"vc",3));
}
function addOnlyNums()
    {
        let total = 0;
        for(let i = 0; i < arguments.length; i++) 
        {
            var num = Number(arguments[i]);
            if(!isNaN(num))
            {
                total += num;
            }
        }
        return total;
    }