window.onload = () =>
{
    countTheArgs(1,2,6,8,3);
}
function countTheArgs()
    {
        let contador = 0;
        for(i = 0; i < arguments.length;i++)
        {
            contador++;
        }
        return contador;
    }