window.onload = () =>
{
    //Gráfico de barras
    google.charts.load("current", {packages:["corechart"]});//Paquete seleccionado
    google.charts.setOnLoadCallback(GraficoBarras);//Muestra gráfico

    //Gráfico de secciones
    google.charts.load('current', {'packages':['corechart']}); //Paquete seleccionado
    google.charts.setOnLoadCallback(GraficoSeccionado); //Muestra gráfico

    //Gráfico geográfico
    google.charts.load('current', {'packages':['geochart'],});//Paquete seleccionado
    google.charts.setOnLoadCallback(GraficoGeografico);//Muestra gráfico
    
}

//Función para el gráfico de barras
function GraficoBarras() 
{
    //Almacenar datos de las elecciones
    var dato = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ['PSOE', 121,"color: ##FF5733"],
        ['PP', 137,"color: #33FF57"],
        ['Vox', 33,"color: #3357FF"],
        ['SUMAR', 31,"color: #FF33A1"],
        ['ERC', 7,"color: #A133FF"],
        ['JXCAT-JUNTS', 7,"color: #33FFF5"],
        ['EH BILDU', 6,"color: #F5FF33"],
        ['EAJ-PNV', 5,"color: #FF8C33"],
        ['B.N.G', 1,"color: #33FF8C"],
        ['CCA', 1,"color: #8C33FF"],
        ['I.P.N', 1,"color: #e5e4e2"]
    ]);

    var view = new google.visualization.DataView(dato);
    view.setColumns([0, 1,
                    { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                    2]);

    var options = {
    title: "Elecciones",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("Barras"));
    chart.draw(view, options);
}

//Función para el gráfico de secciones
function GraficoSeccionado() 
{
    //Almacenar datos de las elecciones
    var dato = new google.visualization.DataTable();
    dato.addColumn('string', 'Topping');
    dato.addColumn('number', 'Slices');
    dato.addRows([
      ['PSOE', 121],
      ['PP', 137],
      ['Vox', 33],
      ['SUMAR', 31],
      ['ERC', 7],
      ['JXCAT-JUNTS', 7],
      ['EH BILDU', 6],
      ['EAJ-PNV', 5],
      ['B.N.G', 1],
      ['CCA', 1],
      ['I.P.N', 1]
    ]);

    //Leyenda del gráfico
    var options = {'title':'Elecciones','width':400,'height':300}; //Titulo
    var chart = new google.visualization.PieChart(document.getElementById('Secciones')); //Selección de elemento donde se implementara
    chart.draw(dato, options); //Dibujar gráfico
}

//Función para el gráfico geográfico
function GraficoGeografico()
{
    var dato = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 100000000],
        ['Spain', 85000000],
        ['United States', 66000000],
        ['Italy', 57000000]
      ]);

      var options = {};

      var chart = new google.visualization.GeoChart(document.getElementById('Geografico'));

      chart.draw(dato, options);
}