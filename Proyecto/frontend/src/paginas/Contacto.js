const Contacto = (props) => {
    return (
        <div>
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario" >
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" name="" />
             </p>
             <p>
                 <label for="email">Email</label>
                 <input type="text" name="" />
             </p>
             <p>
                <label for="telefono">Telefono</label>
                <input type="text" name="" />
             </p>
             <p>
                <label for="mensaje">Mensaje</label>
                <textarea name=""></textarea>
             </p>
             <p class="acciones">
                <input type="submit" value="Enviar" />
             </p>

            </form>

            <div class="datos">
                <h2>Otras vias de Comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 115533-6324</li>
                    <li>Email: alejandrocoppoler@gmail.com</li>
                    <li>Facebook</li>
                    <li>Twiter</li>
                    <li>Skipe</li>
                </ul>
            </div>
        </div>
    );
}
export default Contacto;