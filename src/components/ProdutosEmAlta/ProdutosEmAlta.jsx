import './ProdutosEmAlta.css'
import { Link } from 'react-router-dom'

export function ProdutosEmAlta() {

  return (
    <>
      <div className='titulo-em-alta'>
        <h2 className='titulo-em-alta' id='titulo-prod-em-alta'>Produtos em alta</h2>
        <a className='titulo-em-alta' id='ver-mais-produtos' href="/Produtos">Ver todos →</a>

      </div>
      <div className='container-fluid' id='itens-1'>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'>
            <div className='produto'>
              <div className='imagem-produto'>
                <p className='discount1'>30% OFF</p>
                <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'>
            <div className='produto'>
              <div className='imagem-produto'>
                <p className='discount1'>30% OFF</p>
                <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
            <div className='imagem-produto'>
              <p className='discount'>30% OFF</p>
              <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
            </div>
            <div className='texto-produto'>
              <h4>Tênis</h4>
              <h3>K-Swiss V8 - Masculino</h3>
              <p>
                <span>$200</span>
                <span className='valor'>$100</span>
              </p>
            </div>
          </div></Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
            <div className='imagem-produto'>
              <p className='discount'>30% OFF</p>
              <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
            </div>
            <div className='texto-produto'>
              <h4>Tênis</h4>
              <h3>K-Swiss V8 - Masculino</h3>
              <p>
                <span>$200</span>
                <span className='valor'>$100</span>
              </p>
            </div>
          </div></Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'>
            <div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
            <div className='imagem-produto'>
              <p className='discount'>30% OFF</p>
              <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
            </div>
            <div className='texto-produto'>
              <h4>Tênis</h4>
              <h3>K-Swiss V8 - Masculino</h3>
              <p>
                <span>$200</span>
                <span className='valor'>$100</span>
              </p>
            </div>
          </div></Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
            <div className='imagem-produto'>
              <p className='discount'>30% OFF</p>
              <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
            </div>
            <div className='texto-produto'>
              <h4>Tênis</h4>
              <h3>K-Swiss V8 - Masculino</h3>
              <p>
                <span>$200</span>
                <span className='valor'>$100</span>
              </p>
            </div>
          </div></Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
            <div className='imagem-produto'>
              <p className='discount'>30% OFF</p>
              <img className='img-item' src="../assets/tenis-catalogo.png" alt="" />
            </div>
            <div className='texto-produto'>
              <h4>Tênis</h4>
              <h3>K-Swiss V8 - Masculino</h3>
              <p>
                <span>$200</span>
                <span className='valor'>$100</span>
              </p>
            </div>
          </div></Link>
        </div>
      </>
      )
}
