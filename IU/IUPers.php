<div class="centro" id="IUPers" style="display:none">
    <div class="">
        <div id="titulo" class="">
            <span class="btn-danger redondo white-font" id="titulo">Personaliza tu pizza</span>
        </div>
    </div>
    <div class="auto-adjust">
        <div class="col-3">
            <select id="tam_pers" name="tamaño" class="redondo lg-font">
                <option hidden selected>Tamaño de pizza</option>
                <option value="XGrande">Extra grande</option>
                <option value="Grande">Grande</option>
                <option value="Mediana">Mediana</option>
                <option value="Chica">Chica</option>
            </select>
        </div>
        <div class="col-3">
            <select id="masa_pers" name="orilla" class="redondo lg-font">
                <option hidden selected>Masa</option>
                <option value="rellena">Orilla de queso</option>
                <option value="crujiente">Crujiente</option>
            </select>
        </div>
    </div>

    <div class="row bg-mid-gray">
        Selecciona un ingrediente:
    </div>
    <div class="row bg-yellow">
        <div class="col-2">
            
                <?php include ('php/ingredientes.php') ?>
                <img src="IMGs/Otros/cargando.gif" id="img" style="display:none" />
            
        </div>
        <div class="checkbox col-2">
            <input id="check" type="checkbox" name="extra" value="s" onclick="checkExtra()" />Extra
        </div>
        <div class="col-3">
            Posición
            <div class="row">
                <input id="izq" type="radio" name="lado" value="izq" style="vertical-align=middle;">
                <img src="IMGs/Otros/left-c.png" alt="" height="50">
                <input id="todo" type="radio" name="lado" value="todo" checked="checked">
                <img src="IMGs/Otros/full-c.png" alt="" height="43">
                <input id="der" type="radio" name="lado" value="der">
                <img src="IMGs/Otros/right-c.png" alt="" height="50">
            </div>
        </div>
        <div class="col-1">
            Precio:
            <p id="precio_ing"></p>
        </div>
        <div class="col-2">
            <button id="add_ing" type="button" class="boton-bloque boton-padding-sm btn-green redondo " onclick="añadirIngrediente()">Añadir ingrediente</button>
        </div>
    </div>

    <div class="bg-light-gray padding lg-font">
        <span>Ingredientes de la pizza:</span>
        <ul id="lista_pers">
            
        </ul>
    </div>
    <div class="redondo md-font">
        <div class="tercio-bloque "></div>
        <div class="bg-mid-gray tercio-bloque redondo-inf" id="precio">
            <span class="">Precio de pizza: </span>
            <span id="precio_pers">$100.00</span>
        </div>
        <div class="tercio-bloque">
            <div class="">
                <button class="redondo boton-lg btn-red boton-padding-sm" onclick="cambiarVista( 'IUPers', 'IUSel')">REGRESAR A SELECCIÓN</button>
                <button class="redondo boton-lg btn-red boton-padding-sm" onclick="añadirPizzaPersonalizada()">AGREGAR AL CARRITO</button>
            </div>
        </div>
    </div>

</div>