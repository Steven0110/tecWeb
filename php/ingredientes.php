<?php

$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";
$arreglo = array();
try{
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT * FROM ingrediente";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    echo "<select id='sel_ing' name='ing' class='redondo md-font' onchange='cambiarPrecioUnitario()'>
                <option selected hidden> Ingredientes</option>";
    foreach( $resultados as $ing ){
        echo "<option value='".$ing[ "nombre" ]."'>".$ing[ "nombre" ]."</option>";
    }
    echo "</select>";
}catch(PDOException $ex){
    echo "ERR";
}

?>