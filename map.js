var map;
var pos;
var best;
var suc_nom, suc_tel, num_ped = '#DB2E9A4CA3', tiempo = 25;
function initMap(){
    map = new google.maps.Map( 
        document.getElementById("mapa"), 
        { zoom:10 
                });
    navigator.geolocation.getCurrentPosition( mostrar );
}
function mostrar( position ){
    pos = {
        lat: position.coords.latitude, 
        lng: position.coords.longitude 
    };
    
    
    map.setCenter( pos );
    var marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.BOUNCE
    });
    var info = new google.maps.InfoWindow({
        content:"Ésta es tu ubicación"
    });
    info.open( map, marker);
    marker.setMap( map );
    

    puntoMasCercano();  
}
function getUbicaciones(){
    var xml = new XMLHttpRequest();
    xml.open("GET", "php/ubicaciones.php", false);
    xml.send();
    var resp = xml.responseText;
    var str = resp.split("&");
    var coords = new Array();
    for( var i = 0 ; i < str.length - 1 ; i++ ){
        var aux = str[ i ].split(",");
        coords.push({ lat: Number(aux[ 0 ]), lng: Number(aux[ 1 ]) });
        //Para que en el mapa se vean todas las sucursales:
        /*var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

        var marker = new google.maps.Marker({
            position: coords[ i ],
            animation: google.maps.Animation.BOUNCE,
            icon: image
        });
        marker.setMap(  map );*/
    }
    return coords;
}

function puntoMasCercano(){
    var coords = getUbicaciones();
   /*var xml = new XMLHttpRequest();
    xml.open("GET", "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyB4xl8Qri2quRyfkz61yCp1pM2vXY8YXr8", false);
    xml.send();
    var resp = xml.responseText;
    console.log( resp );*/
    var matrix = new google.maps.DistanceMatrixService;
    var destination1 = pos;
    matrix.getDistanceMatrix({  
        origins: [ pos ],
        destinations: [ coords[ 0 ], coords[ 1 ], coords[ 2 ], coords[ 3 ], coords[ 4 ], coords[ 5 ] ],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error was: ' + status);
        } else {
            console.log( response );
            var distancias = new Array();
            var horas = new Array();
            var minutos = new Array();
            for( var i = 0 ; i < 6 ; i++ ){
                var aux_dist;
                var aux_time;
                var aux;
                var hr, min;
                var h = " ";
                aux_dist = response["rows"][0]["elements"][ i ]["distance"].text;
                aux_time = String(response["rows"][0]["elements"][ i ]["duration"].text);
                aux_dist = Number(aux_dist.replace( ' km', ''));
                if( aux_time.indexOf("hour") > -1 ){
                    aux_time = aux_time.replace( ' hour ', ' ');
                    aux_time = aux_time.replace( ' mins', '');
                    aux = aux_time.split(" ");
                    hr = Number( aux[ 0 ] );
                    min = Number( aux[ 1 ] );
                    
                }
                else{
                    hr = 0;
                    min = aux_time = Number( aux_time.replace( ' mins', '') );
                }
                
                
                horas.push( hr );
                minutos.push( min );
                distancias.push( aux_dist );
                
            }
            console.log( horas );
            console.log( minutos );
            console.log( distancias );
            var index = indexOfMax( horas, minutos );
            console.log( "Index de sucursal más cercana (tiempo): " + index );
            console.log( "Nombre: " + response.destinationAddresses[ index ] );
            console.log( "Coordenadas: " + coords[ index  ].lat + ", " + coords[ index ].lng );
            var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            var marker = new google.maps.Marker({
                position: coords[ index ],
                animation: google.maps.Animation.BOUNCE,
                icon: image
            });
            marker.setMap( map );

            var info = new google.maps.InfoWindow({
                content:"Ésta es la sucursal que te atenderá"
            });
            info.open( map, marker);
            marker.setMap( map );
            var ubicacion_aux = coords[ index  ].lat + "," + coords[ index ].lng;
            var tel_nom_aux = getInfoSucursal( ubicacion_aux );
            //0 es el telefono, y 1 el nombre
            var tel_nom_array = tel_nom_aux.split("&");
            var tel_aux = tel_nom_array[ 0 ].split("=");
            suc_tel = tel_aux[ 1 ];
            var nom_aux = tel_nom_array[ 1 ].split("=");
            suc_nom = nom_aux[ 1 ];
            console.log( "Nombre: " + suc_nom + ", Teléfono: " + suc_tel );
        }
    });
}

function indexOfMax( arr_horas, arr_minutos ) {
    var arr = new Array();
    for( var i = 0 ; i < arr_horas.length ; i++ ){
        var aux = arr_horas[ i ]*60 + arr_minutos[ i ];
        arr.push( aux );
    }
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function getInfoSucursal( ubicacion ){
    var arr = new Array();
    var xml = new XMLHttpRequest();
    xml.open("GET", "php/getSucursal.php?coordenadas=" + ubicacion, false);
    xml.send();
    var resp = xml.responseText;
    console.log("getInfoSucursal: " + resp);
    return resp;
}

function popup(){
    alert('Pedido realizado.\nSucursal asignada: ' + suc_nom + '\nTeléfono de sucursal: ' + suc_tel + '\nNúmero de pedido:' + num_ped + '\nSu orden llega en' + tiempo + 'minutos aprox.\n\n FAVOR DE CONSERVAR ÉSTA INFORMACION')
}
function calcularTiempo( trayecto, cocciones){
    
}