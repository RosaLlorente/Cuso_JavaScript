
window.onload = function()
{
    document.write('<table style="border: solid 1px black; border-collapse: collapse;">');
    for (let i = 0; i < 8; i++) 
    { 
        document.write("<tr>");
        for (let j = 0; j < 8; j++) 
        { 
            (i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0) 
            ? document.write('<td style="border: solid 1px black; width: 100px; height: 100px; background-color: black;"></td>') 
            : document.write('<td style="border: solid 1px black; width: 100px; height: 100px; background-color: white;"></td>');
        }
        
        document.write("</tr>");
    }
    document.write("</table>");
}