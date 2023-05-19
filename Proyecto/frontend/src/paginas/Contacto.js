

import {useState} from 'react';
import "../App.css";


import axios from 'axios';



const Contacto = (props) => {




  

        const initialForm = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        }

        const [sending, setSending] = useState(false); 
        const [msg, setMsg] = useState('');
        const [formData, setFormData] = useState(initialForm);
        
        const handleChange = e => {
            const { name, value } = e.target; 
            setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
            }));
        }


        const handleSubmit = async e => {
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm)
            }
        }
    




            return (

                <main class="holdercontacto">
                                <h2 className="text-center py-5 display-6">Contacto</h2>

                    <div class="container">
                        <div class="contenedorcontacto">
                            <form action="/contacto" method="post" onSubmit={handleSubmit} 
                            className="formulario">
                            <h2 className="text-center">Contacto Rapido</h2>

                                <p>
                                    <label for="nombre">Nombre</label>
                                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                                </p>
                                <p>
                                    <label for="email">Email</label>
                                    <input type="text" name="email" value={formData.email} onChange={handleChange}  />
                                </p>
                                <p>
                                    <label for="telefono">Telefono</label>
                                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                                </p>
                                <p>
                                    <label for="mensaje">Mensaje</label>
                                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                                </p>
                                <p class="acciones">
                                    <input type="submit" value="Enviar" />
                                </p>

                            </form>
                            {sending ? <p>Enviando...</p>:null}
                             {msg ? <p>{msg}</p> : null}




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
                    </div>

                </main>

            )
}     
            




export default Contacto;














/*
*/

/*

<body>


    <h2 class="text-center py-5 display-6">Contacto</h2>

    <main class="holder contacto">


        <div>

            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="">
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="">
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="">
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones">
                    <input type="submit" value="Enviar" />
                </p>

            </form>


        </div>
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

    </main>

    <div class="findehome text-center py-5">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, aspernatur voluptatum
            reprehenderit ab laboriosam corporis ratione magni ea provident quia unde minus laborum assumenda
            atque, quo exercitationem magnam sapiente minima.
        </p>

    </div>
</div>


</body>

</html>



*/