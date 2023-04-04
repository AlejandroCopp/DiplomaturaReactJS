import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../paginas/HomePage";
import Galeria from "../../paginas/Galeria";
import Nosotros from "../../paginas/Nosotros";
import Contacto from "../../paginas/Contacto";
import Nav from "./Nav";

const Header = (props) => {
    return (
        <header>
            <div class="holder">
                <div class="container d-flex">
                    <img src="img/logo.png" width="100" alt="Headerimg" />
                    <h1>AC Design</h1>
                </div>
            </div>

            {/* <BrowserRouter>
                <Nav />
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/Galeria" element={<Galeria />} />
                    <Route path="/Contacto" element={<Contacto />} />

                </Routes>
            </BrowserRouter> */}
            <div className="Holderimg">
                <img className="img-fluid" src="img/banner.png" alt="" />
            </div>
        </header>
    );
}
export default Header;




//cerrar la etiqueta img con un / al final