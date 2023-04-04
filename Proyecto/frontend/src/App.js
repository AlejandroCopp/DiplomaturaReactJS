import {BrowserRouter, Routes, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import HomePage from './paginas/HomePage';
import Galeria from './paginas/Galeria';
import Nosotros from './paginas/Nosotros';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <div className="App">

      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>
    
      <Footer />
    </div>
  );
}

export default App;





// Consideraciones con REACT

//en este archivo App.js se traen todos los componentes mediante etiquetas por ejemplo:
//<Header ></Header> , que se puede sintetizar en <Header/>

// para migrar los link ref del primer HTML que hicimos, hay que copiarlos y opnerlo en la carpeta public/index.html
// como en el caso si trabajamos con bootstrap lo copiamos asi como esta

//Los componentes tienen que empezar con mayucula
//El interior del contenido del componente tiene que estar dento de una etiqueta padren (si tiene solo una etiqueta p explota)
//Podemos llamar un componente dentro de otro con la etiqueta correspondiente

//Al momento  dea armar las paginas(el conteido) recordar reemplzatar los class de html por ClassName de React

//Con respecto al Nav, la barra de navegacion esta conectada con el archivo App.js, Nav.js, y los archivos de las paginas Nosotros.js, Galeria.js, etc...