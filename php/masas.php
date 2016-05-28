<?php

$host = "db4free.net";
$usr = "twbit";
$psw = "tecWeb";
$db = "pizzeriatwbit";
try{
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8", $usr, $psw,
                   array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sql = "SELECT * FROM tipoMasa";
    $stm = $pdo->prepare( $sql );
    $stm->execute();
    $resultados = $stm->fetchAll();
    echo "<select id='sel_masa_1' name='orilla' class='redondo lg-font'>
                    <option hidden selected>Masa</option>";
    foreach( $resultados as $masa ){
        echo "<option value='".$masa[ "nombre" ]."'>".$masa[ "nombre" ]."</option>";
    }
    echo "</select>";
}catch(PDOException $ex){
    echo "ERR";
}

?>