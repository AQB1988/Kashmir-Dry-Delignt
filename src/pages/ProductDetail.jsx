import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedWeight, setSelectedWeight] = useState('1 kg')

  // In a real app, this would come from an API
  const allProducts = {
    1: { id: 1, name: 'Almonds', basePrice: 999, category: 'nuts', image: '/assets/images/products/product-almonds.jpg', description: 'Premium quality almonds from Kashmir. Rich in protein, fiber, and healthy fats.' },
    2: { id: 2, name: 'Cashews', basePrice: 899, category: 'nuts', image: '/assets/images/products/product-cashews.jpg', description: 'Jumbo sized cashew nuts, perfect for snacking and cooking.' },
    3: { id: 3, name: 'Walnuts', basePrice: 699, category: 'nuts', image: '/assets/images/products/product-walnuts.jpg', description: 'Premium walnut kernels, rich in omega-3 fatty acids.' },
    4: { id: 4, name: 'Pistachios', basePrice: 599, category: 'nuts', image: '/assets/images/products/product-pistachios.jpg', description: 'Top quality pistachios, crunchy and flavorful.' },
    5: { id: 5, name: 'Medjool Dates', basePrice: 799, category: 'dates', image: '/assets/images/products/product-medjool-dates.jpg', description: 'Best quality Medjool dates, naturally sweet and soft.' },
    6: { id: 6, name: 'Deglet Noor Dates', basePrice: 599, category: 'dates', image: '/assets/images/products/product-deglet-dates.jpg', description: 'Premium Deglet Noor dates, perfect for daily consumption.' },
    7: { id: 7, name: 'Kashmiri Premium Mix', basePrice: 1299, category: 'exclusives', image: '/assets/images/products/product-kashmiri-mix.jpg', description: 'Exclusive mix of premium dry fruits from Kashmir.' },
    8: { id: 8, name: 'Special Gift Box', basePrice: 1599, category: 'exclusives', image: '/assets/images/gift-boxes/gift-box-special.jpg', description: 'Special gift box with premium selection of dry fruits.' },
    9: { id: 9, name: 'Blueberries', basePrice: 499, category: 'berries', image: '/assets/images/products/product-blueberries.jpg', description: 'Dried blueberries, rich in antioxidants.' },
    10: { id: 10, name: 'Cranberries', basePrice: 399, category: 'berries', image: '/assets/images/products/product-cranberries.jpg', description: 'Sweet and tart dried cranberries.' },
    11: { id: 11, name: 'Sunflower Seeds', basePrice: 299, category: 'seeds', image: '/assets/images/products/product-sunflower-seeds.jpg', description: 'Premium roasted sunflower seeds.' },
    12: { id: 12, name: 'Pumpkin Seeds', basePrice: 349, category: 'seeds', image: '/assets/images/products/product-pumpkin-seeds.jpg', description: 'Nutritious pumpkin seeds, great for snacking.' },
    13: { id: 13, name: 'Festival Gift Box', basePrice: 1299, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-festival.jpg', description: 'Perfect gift box for festivals and special occasions.' },
    14: { id: 14, name: 'Premium Gift Hamper', basePrice: 1599, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-premium.jpg', description: 'Premium gift hamper with assorted dry fruits.' },
    15: { id: 15, name: 'Deluxe Gift Collection', basePrice: 1999, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-deluxe.jpg', description: 'Deluxe collection of premium dry fruits in an elegant gift box.' },
    16: { id: 16, name: 'Luxury Gift Box', basePrice: 2499, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-luxury.jpg', description: 'Luxury gift box with the finest selection of dry fruits.' },
    17: { id: 17, name: 'Royal Gift Hamper', basePrice: 2999, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-royal.jpg', description: 'Royal gift hamper with premium dry fruits and chocolates.' },
    18: { id: 18, name: 'Exclusive Gift Box', basePrice: 3499, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-exclusive.jpg', description: 'Exclusive gift box with the most premium selection.' },
    19: { id: 19, name: 'Gift Box Collection', basePrice: 3999, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-signature-5.jpg', description: 'Premium gift box collection with assorted dry fruits.' },
    20: { id: 20, name: 'Gift Box Collection', basePrice: 4499, category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-signature-6.jpg', description: 'Luxury gift box collection with premium selection.' },
  }

  const product = allProducts[parseInt(id)]

  const weightOptions = [
    { label: '100 gram', multiplier: 0.1 },
    { label: '250 gram', multiplier: 0.25 },
    { label: '500 gram', multiplier: 0.5 },
    { label: '1 kg', multiplier: 1 },
    { label: '2 Kg', multiplier: 2 },
    { label: '5 Kg', multiplier: 5 },
  ]

  const selectedWeightOption = weightOptions.find(w => w.label === selectedWeight)
  const currentPrice = selectedWeightOption 
    ? Math.round(product.basePrice * selectedWeightOption.multiplier)
    : product.basePrice

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="product-detail-page">
      <SEO 
        title={`${product.name} - Buy Online | Kashmir Dry Delight`}
        description={product.description}
        keywords={`${product.name}, buy ${product.name} online, premium ${product.category}, kashmir dry fruits`}
        image={product.image}
        url={`/product/${product.id}`}
        type="product"
      />
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/shop">Shop</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-content">
          <div className="product-image-section">
            <div className="product-main-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-detail-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="product-placeholder" style={{display: 'none'}}>🥜</div>
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            <div className="weight-selection">
              <label>Select Weight:</label>
              <div className="weight-options">
                {weightOptions.map(option => (
                  <button
                    key={option.label}
                    className={`weight-btn ${selectedWeight === option.label ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-price-section">
              <span className="price-label">Price:</span>
              <span className="product-price">₹{currentPrice.toLocaleString('en-IN')}</span>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary btn-add-cart">
                Add to Cart
              </button>
              <button className="btn btn-secondary">
                Buy Now
              </button>
            </div>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                <li>✅ Premium Quality Guarantee</li>
                <li>✅ Fresh and Natural</li>
                <li>✅ Carefully Packed</li>
                <li>✅ Fast Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail

