
<div class="contenedor-full bg-black" id="IURes" style="display:none">

    <div class="bg-yellow redondo auto-adjust" >
        <div class="">
            <span class="jb-font">Resumen de pedido:</span>
        </div>
        <div id="padre_res"></div>
        <!--
        <div class="bg-cyan redondo bf-font justify auto-adjust margen-izq margen-der" style="display: flex; text-align: center">
            <div class="col-3 lg-font bold-font" style="align-self: center;">
                Pizza hawaiiana
            </div>
            <div class="col-2 lg-font bold-font center" style="align-self: center;">
                <ul>
                    Contenido:
                    <li>Piña</li>
                    <li>Jamón</li>
                    <li>Queso</li>
                </ul>
            </div>
            <div class="quinto-bloque"></div>
            <div class="quinto-bloque ug-font" style="align-self: center;">
                Precio $100.00
            </div>
        </div> -->
        <!-- <div class="bg-cyan redondo bf-font justify auto-adjust margen-izq margen-der" style="display: flex; text-align: center">
            <div class="col-3 lg-font bold-font" style="align-self: center;">
                Pizza personalizada
            </div>
            <div class="col-2 lg-font bold-font center" style="align-self: center;">
                <ul>
                    Contenido:
                    <li>Pastor [Mitad-izq]</li>
                    <li>Jamón [Toda]</li>
                    <li>Queso (Extra)</li>
                </ul>
            </div>
            <div class="quinto-bloque"></div>
            <div class="quinto-bloque ug-font" style="align-self: center;">
                Precio $137.00
            </div>
        </div> -->


        <div class="col-4 margenes mapa bg-cyan redondo" style="height:500px" id="mapa">
        </div>
        <div class="medio-bloque">
            <div class="redondo  bg-light-gray" style="text-align:center;">

                <span id="">Dirección: <p>Conjunto Jalatlaco, Circuito J, Mza 3 Lte. 20, Edif B2 Depto 104, CP 55705</p></span>
                <span id="">Cliente: <p>Chabelardo Mezquita del Nopal</p></span>
                <span id=""> Teléfono: <p>26000090</p></span>
            </div>


            <div class="redondo margen-sup  bg-mid-gray" style="text-align:right;">
                <span id="" >Total: <span id="precio_total" class="jb-font">$0</span></span>
                <span id="" class="lg-font">Tienes tarjeta de descuento (-10%)</span>


                <!-- PAGO CON PAYPAL -->
                <form name='formTpv' method='post' action='https://www.sandbox.paypal.com/cgi-bin/webscr'>
                    <input type="hidden" name="cmd" value="_cart">
                    <input type="hidden" name="upload" value="1">
                    <input type='hidden' name='business' value='fakesteven@fake.com'>
                    <input type="hidden" name="item_name_1" value="Pizza Hawaiiana">
                    <input type="hidden" name="amount_1" value="100.00">
                    <input type="hidden" name="item_name_2" value="Pizza de peperoni">
                    <input type="hidden" name="amount_2" value="90.00">
                    <input type='hidden' name='page_style' value='primary'>
                    <input type='hidden' name='no_shipping' value='1'>
                    <input type='hidden' name='return' value='http://localhost/Paypal/index.php?success=true'>
                    <input type='hidden' name='rm' value='2'>
                    <input type='hidden' name='cancel_return' value='http://localhost/Paypal/index.php?success=false'>
                    <input type='hidden' name='no_note' value='1'>
                    <input type='hidden' name='currency_code' value='MXN'>
                    <input type='hidden' name='cn' value='PP-BuyNowBF'>
                    <input type='hidden' name='custom' value=''>
                    <input type="image" src="http://www.paypal.com/es_XC/i/btn/x-click-but01.gif" name="submit" height="50" width="100" alt="Make payments with PayPal - it's fast, free and secure!" hidden="hidden">
                </form>

            </div>

            <div class="redondo margen-sup auto-adjust bg-mid-gray" style="text-align:right;">
                <div class="col-3"></div>
                <div class="col-5">
                    <span class="ug-font">Método de pago:</span>
                </div>
                <div class="col-3 lg-font">
                    <input type="radio" name="pago"> Paypal
                    <br/>
                    <input type="radio" name="pago" checked> Efectivo
                </div>
            </div>
        </div>

        <div class="">
            <div class="cuarto-bloque"></div>
            <div class="quinto-bloque"></div>
            <button class="redondo btn-red boton-lg cuarto-bloque" onclick="resToPed()">EDITAR PEDIDO</button>
            <button class="redondo btn-green boton-lg cuarto-bloque" onclick="location.href='../index.html'; popup()">CONFIRMAR</button>
        </div>
    </div>
</div>