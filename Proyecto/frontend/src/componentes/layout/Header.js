import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../App.css";


const Header = (props) => {
    return (
        <header>
            <div class="holder">
                <div class="container d-flex">
                    <img src="img/logo.png" width="100" alt="Headerimg" />
                    <h1>AC Design</h1>
                </div>
            </div>
            {/* <div class="container ">
                <div className="Holderimg">
                    <img className="img-fluid" src="img/banner.png" alt="" />
                </div>
            </div> */}
        </header>
    );
}
export default Header;




//cerrar la etiqueta img con un / al final