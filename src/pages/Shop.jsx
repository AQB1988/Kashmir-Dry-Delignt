import { useSearchParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Shop.css'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  const allProducts = [
    { id: 1, name: 'Almonds', price: '₹999', category: 'nuts', image: '/assets/images/products/product-almonds.jpg' },
    { id: 2, name: 'Cashews', price: '₹899', category: 'nuts', image: '/assets/images/products/product-cashews.jpg' },
    { id: 3, name: 'Walnuts', price: '₹699', category: 'nuts', image: '/assets/images/products/product-walnuts.jpg' },
    { id: 4, name: 'Pistachios', price: '₹599', category: 'nuts', image: '/assets/images/products/product-pistachios.jpg' },
    { id: 5, name: 'Medjool Dates', price: '₹799', category: 'dates', image: '/assets/images/products/product-medjool-dates.jpg' },
    { id: 6, name: 'Deglet Noor Dates', price: '₹599', category: 'dates', image: '/assets/images/products/product-deglet-dates.jpg' },
    { id: 7, name: 'Kashmiri Premium Mix', price: '₹1,299', category: 'exclusives', image: '/assets/images/products/product-kashmiri-mix.jpg' },
    { id: 8, name: 'Special Gift Box', price: '₹1,599', category: 'exclusives', image: '/assets/images/gift-boxes/gift-box-special.jpg' },
    { id: 9, name: 'Blueberries', price: '₹499', category: 'berries', image: '/assets/images/products/product-blueberries.jpg' },
    { id: 10, name: 'Cranberries', price: '₹399', category: 'berries', image: '/assets/images/products/product-cranberries.jpg' },
    { id: 11, name: 'Sunflower Seeds', price: '₹299', category: 'seeds', image: '/assets/images/products/product-sunflower-seeds.jpg' },
    { id: 12, name: 'Pumpkin Seeds', price: '₹349', category: 'seeds', image: '/assets/images/products/product-pumpkin-seeds.jpg' },
    { id: 13, name: 'Festival Gift Box', price: '₹1,299', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-festival.jpg' },
    { id: 14, name: 'Premium Gift Hamper', price: '₹1,599', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-premium.jpg' },
    { id: 15, name: 'Deluxe Gift Collection', price: '₹1,999', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-deluxe.jpg' },
    { id: 16, name: 'Luxury Gift Box', price: '₹2,499', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-luxury.jpg' },
    { id: 17, name: 'Royal Gift Hamper', price: '₹2,999', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-royal.jpg' },
    { id: 18, name: 'Exclusive Gift Box', price: '₹3,499', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-exclusive.jpg' },
  ]

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === category)

  return (
    <main className="shop-page">
      <SEO 
        title="Shop Premium Dry Fruits - Kashmir Dry Delight"
        description="Browse our wide collection of premium dry fruits, nuts, dates, berries, and gift boxes. Best quality guaranteed with fast delivery across India."
        keywords="buy dry fruits online, premium nuts, almonds, cashews, dates, berries, gift boxes, kashmir dry fruits"
        url="/shop"
      />
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        
        <div className="category-filters">
          <Link to="/shop?category=all" className={category === 'all' ? 'active' : ''}>All</Link>
          <Link to="/shop?category=nuts" className={category === 'nuts' ? 'active' : ''}>Nuts & Dry Fruits</Link>
          <Link to="/shop?category=dates" className={category === 'dates' ? 'active' : ''}>Dates</Link>
          <Link to="/shop?category=exclusives" className={category === 'exclusives' ? 'active' : ''}>KDD Exclusives</Link>
          <Link to="/shop?category=berries" className={category === 'berries' ? 'active' : ''}>Berries</Link>
          <Link to="/shop?category=seeds" className={category === 'seeds' ? 'active' : ''}>Seeds & More</Link>
          <Link to="/shop?category=gift-boxes" className={category === 'gift-boxes' ? 'active' : ''}>Gift Boxes</Link>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
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
                <div className="product-placeholder" style={{display: 'none'}}>🥜</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <Link 
                  to={`/product/${product.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Shop
