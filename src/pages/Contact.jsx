import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1>CONTACTO</h1>
        <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>INFORMACIÓN DE CONTACTO</h2>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <strong>DIRECCIÓN</strong>
              <p>Calle barrio Antioquia Style 123<br />28001 MEDELLIN, España</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <strong>TELÉFONO</strong>
              <p>+57 3016839867</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <strong>EMAIL</strong>
              <p>info@urbanthreads.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <strong>HORARIO</strong>
              <p>Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}

export default Contact
