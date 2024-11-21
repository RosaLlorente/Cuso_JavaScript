window.onload = () =>
{
    //Gráfico de barras
    google.charts.load("current", {packages:["corechart"]});//Paquete seleccionado
    google.charts.setOnLoadCallback(GraficoBarras);//Muestra gráfico
}

//Función para el gráfico de barras
function GraficoBarras() 
{
    //Almacenar datos de las elecciones
    dato = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" }],
        ['PSOE', 121, "color: #FF5733"],
        ['PP', 137, "color: #33FF57"],
        ['Vox', 33, "color: #3357FF"],
        ['SUMAR', 31, "color: #FF33A1"],
        ['ERC', 7, "color: #A133FF"],
        ['JXCAT-JUNTS', 7, "color: #33FFF5"],
        ['EH BILDU', 6, "color: #F5FF33"],
        ['EAJ-PNV', 5, "color: #FF8C33"],
        ['B.N.G', 1, "color: #33FF8C"],
        ['CCA', 1, "color: #8C33FF"],
        ['I.P.N', 1, "color: #e5e4e2"]
    ]);

    options = {
        title: "Elecciones",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };

    chart = new google.visualization.BarChart(document.getElementById("Barras"));

    // Dibuja el gráfico inicial
    drawChart();

    // Actualización del dato de PSOE cada segundo
    setInterval(() => 
    {
        let psoeValue = dato.getValue(0, 1); // Obtén el valor actual de PSOE
        dato.setValue(0, 1, psoeValue + 1); // Incrementa en 1
        drawChart(); // Redibuja el gráfico
    }, 1000);
}

function drawChart() {
    // Crear una vista actualizada con las anotaciones
    const view = new google.visualization.DataView(dato);
    view.setColumns([0, 1,
        { calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },
        2]);
    chart.draw(view, options);
}
