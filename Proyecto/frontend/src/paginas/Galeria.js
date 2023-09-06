import"../App.css";

const Galeria = (props) => {
    return (
        <div>
            <h2 className="text-center py-5 display-6">Galeria</h2>
            <div class="container" >
             <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                 <img src="/img/Galeria/gal1.png" class="img-fluid " alt="..." />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                 <img src="/img/Galeria/gal2.png" class="img-fluid " alt="..." />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                 <img src="/img/Galeria/gal3.png" class="img-fluid " alt="..." />
                </div>
            </div>
               
               
                <div class="galeria">
                    
                  
                    <img src="/img/Galeria/gal4.png" class="img-fluid " alt="..." />
                    <img src="/img/Galeria/gal5.png" class="img-fluid " alt="..." />
                    <img src="/img/Galeria/gal6.png" class="img-fluid " alt="..." />
                    <img src="/img/Galeria/gal7.png" class="img-fluid " alt="..." />
                    <img src="/img/Galeria/gal8.png" class="img-fluid " alt="..." />
                </div>
            </div>
        </div>
    );
}
export default Galeria;