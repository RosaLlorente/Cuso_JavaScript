window.onload = () =>
{
    document.write(sumEveryOther(1,2,45,23,76,34));
}
function sumEveryOther()
{
    let total = 0;
        for(let i = 0; i < arguments.length; i++) 
        {
            if(!isNaN(arguments[i]))
            {
                if(typeof arguments[i] === "number")
                {
                    total += arguments[i];
                }
            }
        }
        return total;
}