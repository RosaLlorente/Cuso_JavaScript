// WORKSHEET 4.1

// EJERCICIO 3 -----------------------------------------------------
function muestraError(objPositionError)
{
	switch (objPositionError.code)
	{
        case objPositionError.PERMISSION_DENIED:
			content.innerHTML = "No se ha permitido el acceso a la posición del usuario.";
		break;
		
        case objPositionError.POSITION_UNAVAILABLE:
			content.innerHTML = "No se ha podido acceder a la información de su posición.";
		break;
		
        case objPositionError.TIMEOUT:
			content.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
		break;
		
        default:
			content.innerHTML = "Error desconocido.";
    }
}   

function ejercicio3() 
{
    content = document.getElementById("contenido");
    geocoder = new google.maps.Geocoder;
    
    map = new google.maps.Map(document.getElementById('mapa'), {
            center: {lat: 0, lng: 0},
            zoom: 18
    });
    miPosicion = new google.maps.Marker({
        position: {lat: 0, lng: 0},
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'Que chulo es esto!'
    });
    
    distancia = 0;
    direccion = "";
    puntoAnterior = null;
    puntoActual = null;
    
    opciones = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1
    };
    
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(muestraPosicionContinua, muestraError, opciones);
    }
}

function muestraPosicionContinua(posicion)
{
    var long = posicion.coords.longitude;
	var lati = posicion.coords.latitude;

    puntoActual={lat: lati, lng: long};
    if (puntoAnterior)
        distancia+=calculaDistancia(puntoAnterior,puntoActual)
    else
        puntoAnterior=puntoActual;
    
    // Pintar recorrido -> Linea entre puntos
    var line = new google.maps.Polyline({
        map: map,
        path: [puntoAnterior, puntoActual],
        strokeWeight: 7,
        strokeOpacity: 0.8,
        strokeColor: "#FFAA00"
    });
    
    puntoAnterior= puntoActual;
    
    
    // Mostrar la dirección
    geocoder.geocode({'location': puntoActual}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) 
            {
                if (results[0])
                    direccion= results[0].formatted_address;
                else 
                    direccion = 'No results found';
            } else 
                direccion = 'Geocoder failed due to: ' + status;
            
             document.getElementById("direccion").innerHTML = "<p><strong>Direccion:</strong> " + direccion;
            });
   
    content.innerHTML ="<p><strong>Latitud:</strong> " + lati + "</p><p><strong>Longitud:</strong> " + long + "</p><p><strong>Distancia:</strong> " + distancia; 
    
    // Mostrar posicion en mapa
    map.panTo(puntoActual);
    // Actualiza marcador
    miPosicion.setPosition(puntoActual);
    
   
}

function calculaDistancia(location1, location2)
{
    var R = 6371;
    var dLat = toRadianes(location2.lat-location1.lat);
    var dLon = toRadianes(location2.lng-location1.lng);
    var dLat1 = toRadianes(location1.lat);
    var dLat2 = toRadianes(location2.lat);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(dLat1) * Math.cos(dLat1) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    
    return d;
}

function toRadianes(valor)
{
   return valor * Math.PI / 180;
}