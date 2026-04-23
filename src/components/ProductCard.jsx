import './ProductCard.css'

function ProductCard({ name, material, price }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push({ name, material, price })
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`"${name}" añadido al carrito`)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-placeholder">👕</span>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{material}</p>
        <div className="product-footer">
          <span className="product-price">€{price}</span>
          <button className="btn-add" onClick={handleAddToCart}>AÑADIR</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard