import { Link } from 'react-router-dom'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Breakfast Mix Seeds', price: '₹499', image: '/assets/images/products/product-breakfast-seeds.jpg' },
    { id: 2, name: 'Best Quality Medjool Dates', price: '₹799', image: '/assets/images/products/product-medjool-dates.jpg' },
    { id: 3, name: 'Exquisite Brazil Nuts', price: '₹899', image: '/assets/images/products/product-brazil-nuts.jpg' },
    { id: 4, name: 'Premium Walnut Kernels', price: '₹699', image: '/assets/images/products/product-walnuts.jpg' },
    { id: 5, name: 'Best Quality Plain Pista', price: '₹599', image: '/assets/images/products/product-pistachios.jpg' },
    { id: 6, name: 'Premium Mamra Almonds', price: '₹999', image: '/assets/images/products/product-almonds.jpg' },
  ]

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Dry Fruits - Featured Collection</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="blog-img" style={{display: 'none'}}>🌾</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <Link to={`/product/${product.id}`} className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
