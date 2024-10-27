function factorial(n)
{
    if(n <= 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

document.write('<table border = "1">');
document.write('<tr><th>Número</th><th>Factorial</th></tr>');
for(var i = 1;i <= 10;i++)
{
    document.write('<tr><td>' + i + '</td><td>' + factorial(i) + '</td></tr>');
}
document.write('<table/>');