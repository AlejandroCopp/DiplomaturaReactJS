import"../App.css";

const HomePage = (props) => {
    return (
      
        <main className="holder d-flex flex-column">
     
      <h1 className="text-center py-5 display-5">
        ¡Bienvenido/a a nuestra tienda de páginas web personalizadas!
      </h1>
      <p className="text-center ">
        ¿Estás buscando una página web única y personalizada para destacar tu marca, empresa o proyecto personal en línea?
      </p>

      <p className="text-center py-5 ">
        ¡Nosotros podemos ayudarte! Nuestro equipo de desarrolladores web altamente capacitados y experimentados trabajará contigo para crear una página web que se adapte perfectamente a tus necesidades y objetivos. .
      </p>

  <div class="container" id="cajadetargetas">

      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/paleta.png" className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8" id="targfond">
            <div className="card-body mt-5">
              <h5 className="card-title">Ofrecemos</h5>
              <p className="card-text">
                Una amplia gama de servicios de diseño y desarrollo web, incluyendo la creación de páginas web completamente nuevas, la optimización de páginas web existentes, la integración de funcionalidades especiales y mucho más. Ya sea que necesites una página web para una pequeña empresa o para una gran organización, estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/medalla.png" className="img-fluid" alt="..." />
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

      
      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/equipo.png" className="img-fluid" alt="..." />
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
      
      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/shop.png" className="img-fluid" alt="..." />
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
 </div>

      <div className="findehome text-center py-5">
        <p>
        La vulnerabilidad en el popular complemento de WordPress expone más de 2 millones de sitios a ataques cibernéticos        </p>
      </div>
    </main>
    );
}
export default HomePage;