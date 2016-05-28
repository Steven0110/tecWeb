
<div class="bg-black" id="IUDatosPed" style="display:none">
    <div class="auto-adjust">
        <h2 class="bg-light-gray cuarto-bloque redondo center">Datos de entrega: </h2>
    </div>
    <form class="lg-font auto-adjust" id="" action="index.html">
       <div>
           <input type="radio" name="dir" id="predef" onclick="direccion()"> Seleccionar una dirección anterior:
           <select name="" id="sel_dir"  disabled>
               
           </select>
       </div>
          <div>
              <input type="radio" name="dir" id="elegir" onclick="direccion()" checked> Seleccionar otra dirección
       </div>
        <div class="quinto-bloque center">
            *Colonia: <br/><input class="redondo" type="text" name="colonia" id="colonia" /> <br/>
        </div>
        <div class="quinto-bloque center">
            *Número interior: <br/><input class="redondo" type="text" name="numInt" id="int" placeholder="ej: Edif B2 Depto 302" /> <br/>
        </div>
        <div class="quinto-bloque center"> 
            *Número exterior: <br/><input class="redondo" type="text" name="numExt" id="ext" placeholder="ej: Mza. 3 Lte. 20" /> <br/>
        </div>
        <div class="quinto-bloque center">
            Código postal: <br><input class="redondo" type="text" id="cp" name="codP" />
        </div>
        <div class="quinto-bloque"></div>
        <div class="quinto-bloque">
        </div>
        <div class="quinto-bloque center">
        </div>

        <div class="right md-font margen-der">Los campos con asteriscos (*) son obligatorios</div>
    </form>
    <div class="center auto-adjust padding bg-mid-gray redondo">
        <div class="auto-adjust quinto-bloque ">
        </div><div class="auto-adjust cuarto-bloque ">
        </div>
        <button class="btn-red redondo boton-bloque cuarto-bloque lg-font" onclick="domToSel()">Regresar a selección</button>
        <button class="btn-green redondo boton-bloque cuarto-bloque lg-font" onclick="cambiarVista( 'IUDatosPed', 'IURes'); initMap()">Continuar</button>
    </div>
</div>