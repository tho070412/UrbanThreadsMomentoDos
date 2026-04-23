import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">URBAN THREADS</Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Inicio</Link>
        </li>
        <li>
          <Link to="/productos" className={isActive('/productos') ? 'active' : ''}>Productos</Link>
        </li>
        <li>
          <Link to="/contacto" className={isActive('/contacto') ? 'active' : ''}>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar