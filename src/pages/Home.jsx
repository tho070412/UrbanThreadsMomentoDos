import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import './Home.css'

const features = [
  {
    icon: '✦',
    title: 'DISEÑO ÚNICO',
    description: 'Piezas exclusivas con estética urbana y minimalista'
  },
  {
    icon: '◎',
    title: 'CALIDAD PREMIUM',
    description: 'Materiales de alta calidad para máxima durabilidad'
  },
  {
    icon: '🏎️',
    title: 'ENVÍO RÁPIDO',
    description: 'Entrega express en 24-48 horas, una locura!'
  }
]

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>
            ESTILO URBANO<br />
            <span className="hero-highlight">REDEFINIDO</span>
          </h1>
          <p>Descubre nuestra colección exclusiva de ropa urbana minimalista</p>
          <Link to="/productos" className="btn-hero">EXPLORAR COLECCIÓN</Link>
        </div>
      </section>

      <section className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
