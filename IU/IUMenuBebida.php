<div class="centro bg-black" id="IUMenuBebida" style="display:none">
    <div class=row>
        <div class="col-4">
            <button onclick="cambiarVista( 'IUMenuBebida', 'IUMenuPizza')">Pizzas</button>
            <button>Bebidas</button>
        </div>
    </div>
    <h3 class="bg-light-gray">Selecciona las bebidas que desees</h3>
    <div class="row">
        <div class="col-3 bg-yellow">
            <h2 id="nombreb_1">Cocacola 2L</h2>
            <div class="col-5">
                <img class="redondo" src="IMGs/Bebidas/coca.jpg" alt="Bebida" height="150px" />
            </div>
            <div class="col-5">
                Precio:
                <p id="preciob_1">$22</p>
                <button class="redondo boton-lg btn-green boton-padding-sm" onclick="añadirBebidaAlCarrito( 1 )">AGREGAR AL CARRITO</button>
            </div>
        </div>
        <div class="col-3 bg-yellow">
            <h2 id="nombreb_2">Pepsi 2L</h2>
            <div class="col-5">
                <img class="redondo" src="IMGs/Bebidas/coca.jpg" alt="Bebida" height="150px" />
            </div>
            <div class="col-5">
                Precio:
                <p id="preciob_2">$19</p>
                <button class="redondo boton-lg btn-green boton-padding-sm" onclick="añadirBebidaAlCarrito( 2 )">AGREGAR AL CARRITO</button>
            </div>
        </div>
        <div class="col-3 bg-yellow">
            <h2 id="nombreb_3">Red Cola 2.00001 L</h2>
            <div class="col-5">
                <img class="redondo" src="IMGs/Bebidas/coca.jpg" alt="Bebida" height="150px" />
            </div>
            <div class="col-5">
                Precio:
                <p id="preciob_3">$22</p>
                <button class="redondo boton-lg btn-green boton-padding-sm" onclick="añadirBebidaAlCarrito( 3 )">AGREGAR AL CARRITO</button>
            </div>
        </div>
    </div>

    <div class="cuarto-bloque"></div>
    <div class="cuarto-bloque"></div>
    <div class="cuarto-bloque">
        <button class="redondo btn-red boton-lg boton-bloque" onclick="cambiarVista( 'IUMenuBebida', 'IUSel')">REGRESAR A SELECCIÓN</button>

    </div>
</div>