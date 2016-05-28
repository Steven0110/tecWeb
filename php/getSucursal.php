<?php
$coords = $_GET[ "coordenadas" ];
$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";

try{
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT * FROM sucursal WHERE ubicacion='$coords'";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    foreach( $resultados as $suc ){
        echo "Tel=".$suc[ "telefono" ]."&Nombre=".$suc[ "nombre" ];
    }
}catch(PDOException $ex){
    echo "ERR";
}
?>