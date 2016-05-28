var contador_prods = 1;
var contador_ingredientes = 0;
var id_ings = 0;
var pizzas_pers = 0;
var tarjeta = false;
function cambiarPrecioPizzaMenuMasa( indice ){
    var selm = document.getElementById("sel_masa_" + indice);
    var masa = selm.options[ selm.selectedOption ].value;
    var p = document.getElementById("precio_" + indice);
    var precio = p.innerHTML;
    precio = Number( precio.replace('$', '') );
    if( masa == "rellena" ){
        p.innerHTML = ( precio );
    }
}

function direccion(){
    if( document.getElementById("predef").checked ){
        document.getElementById("sel_dir").removeAttribute("disabled");
        document.getElementById("colonia").setAttribute("disabled", "yes");
        document.getElementById("int").setAttribute("disabled", "yes");
        document.getElementById("ext").setAttribute("disabled", "yes");
        document.getElementById("cp").setAttribute("disabled", "yes");
    }else{
        document.getElementById("sel_dir").setAttribute("disabled", "yes");
        document.getElementById("colonia").removeAttribute("disabled");
        document.getElementById("int").removeAttribute("disabled");
        document.getElementById("ext").removeAttribute("disabled");
        document.getElementById("cp").removeAttribute("disabled");
    }
}
function revisarTarjeta(){
    var xml = new XMLHttpRequest();
    xml.open("GET", "", false);
    xml.send();
    var resp = xml.responseText;
}

function añadirPizzaAlCarrito( indice ){
    var nombre = document.getElementById("nombre_" + indice ).innerHTML;
    var precio = document.getElementById("precio_" + indice ).innerHTML;
    var tam = document.getElementById("tam_" + indice );
    tam = tam.options[ tam.selectedIndex ].innerHTML;
    var masa = document.getElementById("sel_masa_" + indice );
    masa = masa.options[ masa.selectedIndex ].innerHTML;
    var ing = document.getElementById( "ing_" + indice ).getElementsByTagName("li");
    var ings = texto( ing );
    if( masa == "Masa" || tam == "Tamaño de pizza"){
        alert("Escoge el tamaño y la masa de la pizza")
    }
    else{
        //alert("N: " + nombre + ", P: " + precio + ", T: " + tam + ", Masa: " + masa + ", INGS: " + ings );
        agregarElementoPizza( nombre, precio, tam, masa, ings );
    }
}
function añadirBebidaAlCarrito( indice ){
    var nombre = document.getElementById("nombreb_" + indice ).innerHTML;
    var precio = document.getElementById("preciob_" + indice ).innerHTML;
    agregarElementoBebida( nombre, precio );
}

function añadirPaqueteAlCarrito( indice ){
    var nombre = document.getElementById("nombrep_" + indice).innerHTML;
    var precio = document.getElementById("preciop_" + indice).innerHTML;
    var cont = document.getElementById("cont_" + indice ).getElementsByTagName("li");
    var contenido = texto( cont );
    agregarElementoPaquete( nombre, precio, contenido );
}




function quitarDelCarrito( indice ){
    var padre = document.getElementById("carrito");
    var precio = document.getElementById("precioc_" + indice ).innerHTML;
    padre.removeChild( document.getElementById("elem_" + indice) );   
    actualizarPrecioTotal("-", precio);
}
function texto( lista ){
    var arr_aux = [];
    for( var i = 0 ; i < lista.length ; i++ ){
        var aux = lista[ i ].innerHTML;
        arr_aux.push( aux );
    }
    return arr_aux;
}
function agregarElementoPizza( nombre, precio, tam, masa, ings ){
    var padre = document.getElementById("carrito");
    
    //Resumen de pedido:
    var padre_res = document.getElementById("padre_res");
    var contenedor = document.createElement("div");
    var nombre_div = document.createElement("div");
    var contenido = document.createElement("div");
    var contenido_text = document.createTextNode("Contenido:");
    var relleno = document.createElement("div");
    var precio_div = document.createElement("div");
    var precio_text = document.createTextNode("Precio: ");
    var precio_p = document.createElement("p");
    
    contenedor.className = "bg-cyan redondo bf-font justify auto-adjust margen-izq margen-der borde";
    contenedor.style.cssText = "display: flex; text-align: center;";
    nombre_div.className = "col-3 lg-font bold-font";
    nombre_div.style.cssText = "align-self: center;";
    contenido.className = "col-2 lg-font bold-font center";
    contenido.style.cssText = "align-self: center;";
    relleno.className = "quinto-bloque";
    precio_div.className = "quinto-bloque ug-font";
    precio_div.style.cssText = "align-self: center;";
    
    
    
    
    var elem =  document.createElement("section");
    elem.setAttribute( "id", "elem_" + contador_prods);
    elem.className = "elem";

    
    var nom = document.createElement("p");
    nom.className = "sm";
    nom.setAttribute( "id", "nombrec_" + contador_prods);
    nom.innerHTML = nombre;

    var prec = document.createElement("p");
    prec.className = "sm";
    prec.setAttribute( "id", "precioc_" + contador_prods );
    prec.innerHTML = precio;

    var boton = document.createElement("button");
    boton.className = "btn-red redondo";
    boton.setAttribute("id", "quitar_" + contador_prods);
    boton.setAttribute("onclick", "quitarDelCarrito( " + contador_prods + " )");
    boton.appendChild( document.createTextNode("Quitar") );
    
    //Elementos ocultos que servirán para el resumen del pedido:
    var tamanio = document.createElement("p");
    tamanio.className="sm";
    tamanio.setAttribute( "id", "tamp_" + contador_prods);
    tamanio.innerHTML = tam;
    tamanio.setAttribute( "hidden", "hidden");
    var masap = document.createElement("p");
    masap.className="sm";
    masap.setAttribute( "id", "masap_" + contador_prods);
    masap.innerHTML = masa;
    masap.setAttribute( "hidden", "hidden");
    var lista_ing = document.createElement("ul");
    for( var i = 0 ; i < ings.length ; i++ ){
        var li = document.createElement("li");
        li.innerHTML = ings[ i ];
        lista_ing.appendChild( li );
        
        //Agregar a la pantalla resumen
    }
    
    
    
    elem.appendChild( nom );
    elem.appendChild( prec );
    elem.appendChild( tamanio );
    elem.appendChild( masap );
    //elem.appendChild( lista_ing );
    elem.appendChild( boton );
    padre.appendChild( elem );
    
    //Agregar a la IURes:
    nombre_div.innerHTML = nom.innerHTML;
    precio_div.innerHTML = "Precio: " + precio;
    contenido.appendChild( lista_ing );
    contenedor.appendChild( nombre_div );
    contenedor.appendChild( contenido_text );
    contenedor.appendChild( contenido );
    contenedor.appendChild( relleno );
    contenedor.appendChild( precio_div );
    padre_res.appendChild(contenedor);    
    
    //Calcula el precio total
    actualizarPrecioTotal("+", precio);
    
    contador_prods++;
}

function actualizarPrecioTotal( signo, precio ){
    if( signo == "+"){
        var prec_total = document.getElementById("precio_total");
        var aux_prec = prec_total.innerHTML;
        aux_prec = aux_prec.replace('$', '')
        var aux_total = precio.replace('$', '');
        console.log( "aux_prec: " + aux_prec);
        console.log( "precio: " + aux_total);
        var total = Number( aux_total ) + Number( aux_prec );
        console.log("Total: $" + total);
        prec_total.innerHTML = "$" + total;   
    } 
    else{
        var prec_total = document.getElementById("precio_total");
        var aux_prec = prec_total.innerHTML;
        aux_prec = aux_prec.replace('$', '')
        var aux_total = precio.replace('$', '');
        console.log( "aux_prec: " + aux_prec);
        console.log( "precio: " + aux_total);
        var total = Number( aux_prec ) - Number( aux_total );
        console.log("Total: $" + total);
        prec_total.innerHTML = "$" + total;   
    }
}

function agregarElementoBebida( nombre, precio ){
    var padre = document.getElementById("carrito");
    
    //Resumen de pedido
    var padre_res = document.getElementById("padre_res");
    var contenedor = document.createElement("div");
    var nombre_div = document.createElement("div");
    var contenido = document.createElement("div");
    var relleno = document.createElement("div");
    var precio_div = document.createElement("div");
    var precio_text = document.createTextNode("Precio: ");
    var precio_p = document.createElement("p");

    contenedor.className = "bg-cyan redondo bf-font justify auto-adjust margen-izq margen-der borde";
    contenedor.style.cssText = "display: flex; text-align: center;";
    nombre_div.className = "col-3 lg-font bold-font";
    nombre_div.style.cssText = "align-self: center;";
    contenido.className = "col-2 lg-font bold-font center";
    contenido.style.cssText = "align-self: center;";
    relleno.className = "quinto-bloque";
    precio_div.className = "quinto-bloque ug-font";
    precio_div.style.cssText = "align-self: center;";
    
    
    var elem =  document.createElement("section");
    elem.setAttribute( "id", "elem_" + contador_prods);
    elem.className = "elem";
    
    var nom = document.createElement("p");
    nom.className = "sm";
    nom.setAttribute( "id", "nombrec_" + contador_prods);
    nom.innerHTML = nombre;

    var prec = document.createElement("p");
    prec.className = "sm";
    prec.setAttribute( "id", "precioc_" + contador_prods );
    prec.innerHTML = precio;
    
    var boton = document.createElement("button");
    boton.className = "btn-red redondo";
    boton.setAttribute("id", "quitar_" + contador_prods);
    boton.setAttribute("onclick", "quitarDelCarrito( " + contador_prods + " )");
    boton.appendChild( document.createTextNode("Quitar") );
    
    elem.appendChild( nom );
    elem.appendChild( prec );
    elem.appendChild( boton );
    padre.appendChild( elem );

    

    nombre_div.innerHTML = nom.innerHTML;
    precio_div.innerHTML = "Precio: " + precio;
    contenedor.appendChild( nombre_div );
    contenedor.appendChild( contenido );
    contenedor.appendChild( relleno );
    contenedor.appendChild( precio_div );
    padre_res.appendChild(contenedor);   
    
    contador_prods++;

    actualizarPrecioTotal("+", precio);
}

function agregarElementoPaquete( nombre, precio, contenidop ){
    var padre = document.getElementById("carrito");
    
    //Resumen de pedido:
    var padre_res = document.getElementById("padre_res");
    var contenedor = document.createElement("div");
    var nombre_div = document.createElement("div");
    var contenido = document.createElement("div");
    var contenido_text = document.createTextNode("Contenido:");
    var relleno = document.createElement("div");
    var precio_div = document.createElement("div");
    var precio_text = document.createTextNode("Precio: ");
    var precio_p = document.createElement("p");
    

    contenedor.className = "bg-cyan redondo bf-font justify auto-adjust margen-izq margen-der borde";
    contenedor.style.cssText = "display: flex; text-align: center;";
    nombre_div.className = "col-3 lg-font bold-font";
    nombre_div.style.cssText = "align-self: center;";
    contenido.className = "col-2 lg-font bold-font center";
    contenido.style.cssText = "align-self: center;";
    relleno.className = "quinto-bloque";
    precio_div.className = "quinto-bloque ug-font";
    precio_div.style.cssText = "align-self: center;";
    
    var elem =  document.createElement("section");
    elem.setAttribute( "id", "elem_" + contador_prods);
    elem.className = "elem";
    

    var nom = document.createElement("p");
    nom.className = "sm";
    nom.setAttribute( "id", "nombrepaq_" + contador_prods);
    nom.innerHTML = nombre;

    var prec = document.createElement("p");
    prec.className = "sm";
    prec.setAttribute( "id", "precioc_" + contador_prods );
    prec.innerHTML = precio;
    
    var lista_cont = document.createElement("ul");
    for( var i = 0 ; i < contenidop.length ; i++ ){
        var li = document.createElement("li");
        li.innerHTML = contenidop[ i ];
        lista_cont.appendChild( li );
    }
    
    var boton = document.createElement("button");
    boton.className = "btn-red redondo";
    boton.setAttribute("id", "quitar_" + contador_prods);
    boton.setAttribute("onclick", "quitarDelCarrito( " + contador_prods + " )");
    boton.appendChild( document.createTextNode("Quitar") );
    
    elem.appendChild( nom );
    elem.appendChild( prec );
    elem.appendChild( lista_cont );
    elem.appendChild( boton );
    padre.appendChild( elem );
    
    

    //Agregar a la IURes:
    nombre_div.innerHTML = nom.innerHTML;
    precio_div.innerHTML = "Precio: " + precio;
    contenido.appendChild( lista_cont );
    contenedor.appendChild( nombre_div );
    contenedor.appendChild( contenido_text );
    contenedor.appendChild( contenido );
    contenedor.appendChild( relleno );
    contenedor.appendChild( precio_div );
    padre_res.appendChild(contenedor); 
    contador_prods++;
    

    actualizarPrecioTotal("+", precio);
}







//Para pizzas personalizadas:
function añadirPizzaPersonalizada( ){
    
    
    pizzas_pers++;
    var nombre = "Pizza Personalizada #" + pizzas_pers;
    var precio = document.getElementById("precio_pers").innerHTML;
    var tam = document.getElementById("tam_pers");
    tam = tam.options[ tam.selectedIndex ].innerHTML;
    var masa = document.getElementById("masa_pers" );
    masa = masa.options[ masa.selectedIndex ].innerHTML;
    var ing = document.getElementById( "lista_pers" ).getElementsByTagName("li");
    var ings = texto_pers( ing );
    if( masa == "Masa" || tam == "Tamaño de pizza"){
        alert("Escoge el tamaño y la masa de la pizza")
    }
    else{
        //Limpia campos
        document.getElementById( "check" ).checked = false;
        contador_ingredientes = 0;
        document.getElementById("lista_pers").innerHTML = '';
        document.getElementById("precio_ing").innerHTML = '';
        document.getElementById("precio_pers").innerHTML = "$100"
        
        agregarElementoPizza( nombre, precio, tam, masa, ings );
    }    
}

function texto_pers( array ){
    var arr_aux = [];
    for( var i = 0 ; i < array.length ; i++ ){
        var aux = array[ i ].innerHTML;
        aux = aux.split( '-' );
        aux = aux[ 0 ];
        aux = aux.substring( 0, aux.length - 1 );
        //aux = aux.replace( ' ', '')
        arr_aux.push( aux );
    }
    return arr_aux;
}

function cambiarPrecioUnitario(){
    var sel = document.getElementById("sel_ing");
    var opc = sel.options[ sel.selectedIndex ].value;
    var img = document.getElementById("img");
    img.style.display = "block";
    var boton = document.getElementById("add_ing");
    //boton.disabled = true;
    boton.setAttribute( "disabled", "disabled");
    var xml = new XMLHttpRequest();
    xml.open("GET", "php/getPrecio.php?ing='" + opc + "'", false );
    xml.send();
    var resp = xml.responseText;
    document.getElementById("precio_ing").innerHTML = "$" + resp;
    boton.disabled = false;
    img.style.display = "none";
}

function añadirIngrediente(){
    id_ings++;
    if( contador_ingredientes > 5 )
        alert("Sólo puedes escoger 6 ingredientes");
    else{

        contador_ingredientes++;
        var precio = document.getElementById("precio_ing").innerHTML;
        precio = Number( precio.replace( '$', '' ) );
        var sel_ing = document.getElementById("sel_ing");
        var ing = sel_ing.options[ sel_ing.selectedIndex ].value;
        if( ing == "Ingredientes")
            alert("Por favor elige un ingrediente");
        else{
            var opc;
            var extra = "";
            if( document.getElementById("izq").checked == true ){
                opc = "[Mitad Izq]";
            }
            else if( document.getElementById("todo").checked == true ){
                opc = "[Toda]";
            }
            else{
                opc = "[Mitad der]";
            }
            if( document.getElementById("check").checked == true ){
                extra = "(Extra)";
            }
            añadirElementoIngrediente( ing, precio, extra, opc );
        }
    }
}
function añadirElementoIngrediente( nombre, precio, extra, pos){
    var padre = document.getElementById("lista_pers");
    var li = document.createElement("li");
    var nodo = document.createTextNode( nombre + " " + extra + " " + pos + "  -  Precio: $" + precio + "  ");
    var boton = document.createElement("button");
    boton.className = "btn-green boton-md";
    boton.innerHTML = "Eliminar de pizza";
    boton.setAttribute( "onclick", "eliminarElementoIngrediente( " + id_ings + " )" );
    li.className = "borde-sup";
    li.setAttribute("id", "ing_pers_" + id_ings);
    li.appendChild( nodo );
    li.appendChild( boton );
    padre.appendChild( li );
    actualizarPrecio("+", precio);
}
function eliminarElementoIngrediente( indice ){
    contador_ingredientes--;
    console.log( contador_ingredientes );
    var padre = document.getElementById( "lista_pers" );

    var cadena = document.getElementById( "ing_pers_" + indice ).innerHTML;
    var subs = cadena.split('$');
    var precio = subs[ 1 ].substring( 0, 3 )
    precio = Number( precio.replace( ' ', '') );
    actualizarPrecio( "-", precio );

    padre.removeChild( document.getElementById( "ing_pers_" + indice) );
}

function actualizarPrecio( signo, cantidad){
    var precio_actual = document.getElementById("precio_pers").innerHTML;
    precio_actual = precio_actual.replace( '$', '' );
    var precio_actualizado;
    if( signo == "+"){
        precio_actualizado = Number( cantidad ) + Number( precio_actual );
    }
    else if( signo == '-'){
        precio_actualizado = Number( precio_actual ) - Number( cantidad ); 
    }
    document.getElementById("precio_pers").innerHTML = "$" + precio_actualizado;       
}
function checkExtra(){
    var precio_actual = document.getElementById("precio_ing").innerHTML;
    precio_actual = precio_actual.replace( '$', '' );
    var precio_actualizado;
    if( document.getElementById("check").checked ){
        precio_actualizado = 5 + Number( precio_actual );
    }
    else{
        precio_actualizado = Number( precio_actual ) - 5 ; 
    }
    document.getElementById("precio_ing").innerHTML = "$" + precio_actualizado;    
    
}