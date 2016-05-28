function cambiarVista( from, to ){
    document.getElementById( from ).style.display = "none";
    document.getElementById( to ).style.display = "inline-block";
}
function selToDom(){
    
}
function domToSel(){
    document.getElementById( 'IUSel' ).style.display = "inline-block";
    document.getElementById( 'IUCarrito' ).style.display = "inline-block";
    document.getElementById( 'IUDatosPed' ).style.display = "none";  
    document.getElementById( 'body' ).style.backgroundColor = "#262626";
}
function resToPed(){
    document.getElementById( 'IURes' ).style.display = "none";
    document.getElementById( 'IUSel' ).style.display = "inline-block";
    document.getElementById( 'IUCarrito' ).style.display = "inline-block";
}
function toDom(){
    document.getElementById( 'IUSel' ).style.display = "none";
    document.getElementById( 'IUCarrito' ).style.display = "none";
    document.getElementById( 'IUMenuPizza' ).style.display = "none";
    document.getElementById( 'IUMenuBebida' ).style.display = "none";
    document.getElementById( 'IUMenuPaq' ).style.display = "none";
    document.getElementById( 'IUPers' ).style.display = "none";
    document.getElementById( 'IUDatosPed' ).style.display = "block";
    document.getElementById( 'body' ).style.backgroundColor = "#262626";
}