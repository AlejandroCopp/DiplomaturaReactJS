import"../App.css";

const HomePage = (props) => {
    return (
        <main className="holder d-flex flex-column">
     
      <h2 className="text-center py-5 display-6">
        ¡Bienvenido/a a nuestra tienda de páginas web personalizadas!
      </h2>
      <p className="text-center ">
        ¿Estás buscando una página web única y personalizada para destacar tu marca, empresa o proyecto personal en línea?
      </p>

      <p className="text-center py-5 ">
        ¡Nosotros podemos ayudarte! Nuestro equipo de desarrolladores web altamente capacitados y experimentados trabajará contigo para crear una página web que se adapte perfectamente a tus necesidades y objetivos. .
      </p>

      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/paleta.png" className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body mt-5">
              <h5 className="card-title">Ofrecemos</h5>
              <p className="card-text">
                Una amplia gama de servicios de diseño y desarrollo web, incluyendo la creación de páginas web completamente nuevas, la optimización de páginas web existentes, la integración de funcionalidades especiales y mucho más. Ya sea que necesites una página web para una pequeña empresa o para una gran organización, estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="findehome text-center py-5">
        <p>
          Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, aspernatur voluptatum reprehenderit ab laboriosam corporis ratione magni ea provident quia unde minus laborum assumenda atque, quo exercitationem magnam sapiente minima.
        </p>
      </div>
    </main>
    );
}
export default HomePage;