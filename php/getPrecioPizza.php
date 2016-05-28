<?php

$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";
$pizza = $_GET[ "pizza" ];
try{
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT precio FROM pizza WHERE nombre=$pizza";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    foreach( $resultados as $precio ){
        echo $precio[ "precio" ];
    }
}catch(PDOException $ex){
    echo "ERR";
}

?>