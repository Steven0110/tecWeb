<?php

$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";
$ing = $_GET[ "ing" ];
try{
    $pdo = new PDO("mysql:host=$host;dbname=$db", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT * FROM ingrediente WHERE nombre=$ing";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    foreach( $resultados as $ing ){
        echo $ing[ "precioUnitario" ];
    }
}catch(PDOException $ex){
    echo "ERR";
}

?>