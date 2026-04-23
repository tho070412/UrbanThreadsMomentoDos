import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    localStorage.setItem('lastContactForm', JSON.stringify(formData))
    alert('Mensaje guardado (demo). Revisa la consola para ver los datos.')
    setFormData({ nombre: '', apellidos: '', email: '', asunto: '', mensaje: '' })
  }

  return (
    <div className="contact-form-card">
      <h2>ENVÍANOS UN MENSAJE</h2>
      <div className="demo-notice">
        <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">NOMBRE</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">APELLIDOS</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="asunto">ASUNTO</label>
          <select
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
          >
            <option value="">Selecciona un asunto</option>
            <option value="pedido">Consulta de pedido</option>
            <option value="devolucion">Devolución</option>
            <option value="tallas">Guía de tallas</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">MENSAJE</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-submit">ENVIAR MENSAJE</button>
      </form>
    </div>
  )
}

export default ContactForm
