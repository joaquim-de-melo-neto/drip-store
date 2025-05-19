import './Footer.css'

export function Footer() {

  return (
    <>
      <footer>
        <div id="fColunas">
          <div id="fColuna1">
            <h2><img src="assets\logo-branca.png" alt="Digital Store Logo" />Digital Store</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <a className='redes' href="#">
              <img src="assets\icone-facebook.png" alt="Facebook"></img>
            </a>

            <a className='redes' href="#">
              <img src="assets\icone-instagram.png" alt="Instagram"></img>
            </a>

            <a className='redes' href="#">
              <img src="assets\icone-twitter.png" alt="Twitter"></img>
            </a>

          </div>
          <div id="fColuna2">
            <h3>Informação</h3>
            <ul>
              <li><a href="#"> Sobre Drip Store</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="#">Meus Pedidos</a></li>
            </ul>
          </div>
          <div id="fColuna3">
            <h3>Categorias</h3>
            <ul>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Bonés</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Tênis</a></li>
            </ul>
          </div>
          <div id="fColuna4">
            <h3>Contato</h3>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <hr />
        <p id='direitos'>© 2024 Digital College</p>
      </footer>
    </>
  )
}
