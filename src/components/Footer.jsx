import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>URBAN THREADS</h3>
          <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
        </div>

        <div className="footer-section">
          <h4>ENLACES</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>AYUDA</h4>
          <ul>
            <li><a href="#">Guía de tallas</a></li>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SÍGUENOS</h4>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Pinterest">P</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Urban Threads. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer