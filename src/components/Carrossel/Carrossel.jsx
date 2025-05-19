import './Carrossel.css'
import 'bootstrap/dist/css/bootstrap.css'

export function Carrossel() {

    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='d-flex'>
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../assets/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="/Produtos">Ver Ofertas</a>
                            </div>
                            <img src="../assets/air-force-home.png" class="d-flex" alt="..." />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex">
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../assets/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="/Produtos">Ver Ofertas</a>
                            </div>
                            <img src="../assets/air-force-home.png" class="d-flex" alt="..." />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex">
                            <div className='textos-carrossel'>
                                <h2 className='sub-titulo'>Melhores ofertas personalizadas</h2>
                                <h1 className='titulo-carrossel'>Queima de estoque Nike <img className='fire-carrossel' src="../assets/fire.png" alt="Imagem do tênis Air Force, do modelo fire." /></h1>
                                <p className='texto-carrossel'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <a className='ver-ofertas' href="/Produtos">Ver Ofertas</a>
                            </div>
                            <img src="../assets/air-force-home.png" class="d-flex" alt="..." />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}