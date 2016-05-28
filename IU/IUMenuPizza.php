<div class="centro" id="IUMenuPizza" style="display:none">
    <div class=row>
        <div class="col-4">
            <button onclick="">Pizzas</button>
            <button onclick="cambiarVista('IUMenuPizza', 'IUMenuBebida')">Bebidas</button>
        </div>
    </div>
    <h3 class="bg-light-gray">Selecciona las pizzas que desees</h3>
    <div class="row bg-yellow borde-sup" id="pizza_1">
        <div class="col-3">
            <p id="nombre_1" class="sm">Tradicional</p>
            <img src="IMGs/Pizzas/tradicional.png" alt="Pizza" height="120px" />
        </div>
        <div class="col-2">
            <p class="sm">Ingredientes</p>
            <ul id="ing_1">
                <li>Pepperoni</li>
                <li>Queso</li>
                <li>Chorizo</li>
            </ul>
        </div>
        <div class="col-2">
            <div class="row">
                <?php include 'php/masas.php'; ?>
            </div>
            <div class="row">
                <select id="tam_1" name="tamaño" class="redondo lg-font">
                    <option hidden selected>Tamaño de pizza</option>
                    <option value="XGrande">Extra grande</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediana">Mediana</option>
                    <option value="Chica">Chica</option>
                </select>
            </div>
        </div>
        <div class="col-1">
            Precio
            <p id="precio_1">$120</p>
        </div>
        <div class="col-2">
            <button id="agregar_1" class="redondo boton-lg btn-green boton-padding-sm" onclick="añadirPizzaAlCarrito(1)">AGREGAR AL CARRITO</button>
        </div>
    </div>

    <div class="row bg-yellow borde-sup" id="pizza_2">
        <div class="col-3">
            <p id="nombre_2" class="sm">Hawaiiana</p>
            <img src="IMGs/Pizzas/hawaiiana.png" alt="Pizza" height="120px" />
        </div>
        <div class="col-2">
            <p class="sm">Ingredientes</p>
            <ul id="ing_2">
                <li>Piña</li>
                <li>Jamón</li>
            </ul>
        </div>
        <div class="col-2">
            <div class="row">
                <select id="sel_masa_2" name="orilla" class="redondo lg-font">
                    <option hidden selected>Masa</option>
                    <option value="rellena">Orilla de queso</option>
                    <option value="crujiente">Crujiente</option>
                </select>
            </div>
            <div class="row">
                <select id="tam_2" name="tamaño" class="redondo lg-font">
                    <option hidden selected>Tamaño de pizza</option>
                    <option value="XGrande">Extra grande</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediana">Mediana</option>
                    <option value="Chica">Chica</option>
                </select>
            </div>
        </div>
        <div class="col-1">
            Precio
            <p id="precio_2">$110</p>
        </div>
        <div class="col-2">
            <button id="agregar_2" class="redondo boton-lg btn-green boton-padding-sm" onclick="añadirPizzaAlCarrito(2)">AGREGAR AL CARRITO</button>
        </div>
    </div>
    

    <div class="cuarto-bloque"></div>
    <div class="cuarto-bloque"></div>
    <div class="cuarto-bloque">
        <button class="redondo btn-red boton-lg boton-bloque" onclick="cambiarVista( 'IUMenuPizza', 'IUSel')">REGRESAR A SELECCIÓN</button>

    </div>
</div>