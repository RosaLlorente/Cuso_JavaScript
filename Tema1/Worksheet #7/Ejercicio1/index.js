
window.onload = function()
{
    document.write(suma(1,"3",9.5));
}
function suma()
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