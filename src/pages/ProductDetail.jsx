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
    8: { id: 8, name: 'Special Gift Box', basePrice: 1599, category: 'exclusives', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Special gift box with premium selection of dry fruits.' },
    9: { id: 9, name: 'Blueberries', basePrice: 499, category: 'berries', image: '/assets/images/products/product-blueberries.jpg', description: 'Dried blueberries, rich in antioxidants.' },
    10: { id: 10, name: 'Cranberries', basePrice: 399, category: 'berries', image: '/assets/images/products/product-cranberries.jpg', description: 'Sweet and tart dried cranberries.' },
    11: { id: 11, name: 'Sunflower Seeds', basePrice: 299, category: 'seeds', image: '/assets/images/products/product-sunflower-seeds.jpg', description: 'Premium roasted sunflower seeds.' },
    12: { id: 12, name: 'Pumpkin Seeds', basePrice: 349, category: 'seeds', image: '/assets/images/products/product-pumpkin-seeds.jpg', description: 'Nutritious pumpkin seeds, great for snacking.' },
    13: { id: 13, name: 'Festival Gift Box', basePrice: 1299, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Perfect gift box for festivals and special occasions.' },
    14: { id: 14, name: 'Premium Gift Hamper', basePrice: 1599, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Premium gift hamper with assorted dry fruits.' },
    15: { id: 15, name: 'Deluxe Gift Collection', basePrice: 1999, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Deluxe collection of premium dry fruits in an elegant gift box.' },
    16: { id: 16, name: 'Luxury Gift Box', basePrice: 2499, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Luxury gift box with the finest selection of dry fruits.' },
    17: { id: 17, name: 'Royal Gift Hamper', basePrice: 2999, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Royal gift hamper with premium dry fruits and chocolates.' },
    18: { id: 18, name: 'Exclusive Gift Box', basePrice: 3499, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Exclusive gift box with the most premium selection.' },
    19: { id: 19, name: 'Gift Box Collection', basePrice: 3999, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Premium gift box collection with assorted dry fruits.' },
    20: { id: 20, name: 'Gift Box Collection', basePrice: 4499, category: 'gift-boxes', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80', description: 'Luxury gift box collection with premium selection.' },
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

  // WhatsApp number
  const whatsappNumber = '916005324499' // Format: country code + number (no + or spaces)
  const siteUrl = 'https://kashmirdrydelights.vercel.app'

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'm interested in ordering:

*${product.name}*
📦 Weight: ${selectedWeight}
💰 Price: ₹${currentPrice.toLocaleString('en-IN')}
📝 Description: ${product.description}

Product Link: ${siteUrl}/product/${product.id}

Please let me know about availability and delivery options. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

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
        title={`${product.name} - Buy Online | Premium Quality | Kashmir Dry Delight`}
        description={`Buy premium quality ${product.name} online from Kashmir Dry Delight. ${product.description} 100% quality guarantee, fast delivery across India. Best prices on ${product.name.toLowerCase()}.`}
        keywords={`${product.name}, buy ${product.name} online, ${product.name.toLowerCase()} price, premium ${product.name.toLowerCase()}, ${product.name.toLowerCase()} online india, best ${product.name.toLowerCase()}, quality ${product.name.toLowerCase()}, kashmir ${product.name.toLowerCase()}, ${product.category}, dry fruits, nuts, dates, berries, kashmir dry fruits, buy dry fruits online, online dry fruits, premium dry fruits, dry fruits india`}
        image={product.image}
        url={`/product/${product.id}`}
        type="product"
        product={{
          name: product.name,
          description: product.description,
          image: product.image,
          price: currentPrice,
          basePrice: product.basePrice
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop' },
          { name: product.name, url: `/product/${product.id}` }
        ]}
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
              <button 
                className="btn btn-whatsapp"
                onClick={handleWhatsAppOrder}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
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

