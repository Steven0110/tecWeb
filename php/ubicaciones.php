<?php

$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";
$arreglo = array();
try{
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT ubicacion FROM sucursal";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    foreach( $resultados as $coord ){
        echo $coord[ "ubicacion" ]."&";
    }
}catch(PDOException $ex){
    echo "ERR";
}
    
?>