import"../App.css";

const Galeria = (props) => {
    return (
        <div>
            <h2 className="text-center py-5 display-6">Galeria</h2>
            <div class="container ">
                <div class="galeria">
                    <img src="https://picsum.photos/300/300?random=1" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=2" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=3" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=4" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=5" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=6" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=7" class="img-fluid " alt="..." />
                    <img src="https://picsum.photos/300/300?random=8" class="img-fluid " alt="..." />
                </div>
            </div>
        </div>
    );
}
export default Galeria;