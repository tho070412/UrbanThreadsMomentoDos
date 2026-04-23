import ProductCard from '../components/ProductCard'
import './Products.css'

const products = [
  { name: 'Camiseta Básica Urban', material: 'Algodón 100% orgánico', price: 30 },
  { name: 'Jeans Slim Fit', material: 'Denim premium stretch', price: 90 },
  { name: 'Sudadera Oversize', material: 'Algodón French Terry', price: 65 },
  { name: 'Chaqueta Bomber', material: 'Nylon resistente al agua', price: 120 },
  { name: 'Gorra Snapback', material: 'Bordado premium', price: 35 },
  { name: 'Zapatillas Urban', material: 'Suela de goma antideslizante', price: 95 }
]

function Products() {
  return (
    <main className="products-page">
      <div className="products-header">
        <h1>NUESTRA COLECCIÓN</h1>
        <p>Estilo urbano para cada ocasión</p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            material={product.material}
            price={product.price}
          />
        ))}
      </div>
    </main>
  )
}

export default Products
