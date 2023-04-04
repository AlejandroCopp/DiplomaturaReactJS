import { Link } from "react-router-dom";


const Nav = (props) => {
    return (


<nav>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to= "/Nosotros">Nosotros</Link></li>
            <li><Link to= "/Galeria">Galeria</Link></li>
            <li><Link to= "/Contacto">Contacto</Link></li>
        </ul>
    </div>
</nav>










        // <div class="container ">
        //     <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        //         <div class="container-fluid">
        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <a class="nav-link activo" aria-current="page" href="index.html">Home</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link " aria-current="page" href="nosotros.html">Nosotros</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="servicios.html">Servicios</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="galeria.html">Galeria</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="novedades.html">Novedades</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="contacto.html">Contacto</a>
        //                     </li>

        //                 </ul>
        //                 <form class="d-flex" role="search">
        //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                     <button class="btn btn-outline-success" type="submit">Busque</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </nav>
        // </div>

    );
}
export default Nav;