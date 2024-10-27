document.write("<table border = solid 1px black>")
    document.write("<tr> <th>Angulo</th> <th>Seno</th></tr>")
    for(i = 0;i <= 360;i++)
    {
        var anguloRadianes = i * (Math.PI / 180);
        seno  = Math.sin(anguloRadianes);
        document.write("<tr>")
            document.write("<td>" + i + "</td>");
            document.write("<td>" + seno + "</td>");
        document.write("</tr>")
    }
document.write("</table>")