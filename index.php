<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <script src="wizard.js"></script>
        <script src="map.js"></script>
        <script src="interacciones.js"></script>
        <script src="pers.js"></script>
        <!--Mi llave para usar la API de Google Maps-->
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLje9nqBVT_C1CtfZH7G_ldlUx7LOafyo&callback=initMap">
        </script>
        <link rel="stylesheet" href="bloques.css">
        <link rel="stylesheet" href="fondos.css">
        <link rel="stylesheet" href="botones.css">
        <link rel="stylesheet" href="texto.css">
        <title>Pedir online</title>
    </head>


    <body id="body" onload="">
        <div class="row cabecera bg-light-gray" onclick="location.href='../index.html'">
            LOGO
        </div>
        <div class="pedido">
          
           <!-- IUSel -->
           <?php
                include 'IU/IUSel.php';
            ?>

            <!-- Carrito de compras -->
            <?php
                include 'IU/IUCarrito.php';
            ?>

            <!-- IUPers -->
            <?php
                include 'IU/IUPers.php';
            ?>

            <!--IUMenuPizza-->
            <?php
                include 'IU/IUMenuPizza.php';
            ?>

            <!--IUMenuBebida-->
            <?php
                include 'IU/IUMenuBebida.php';
            ?>

            <!-- IUMenuPaq-->
            <?php
                include 'IU/IUMenuPaq.php';
            ?>

            <!-- IUDatosPed -->
            <?php
                include 'IU/IUDatosPed.php';
            ?>

            <!-- IURes-->
            <?php
                include 'IU/IURes.php';
            ?>

        </div>

    </body>


</html>