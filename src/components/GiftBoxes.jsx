import { Link } from 'react-router-dom'
import './GiftBoxes.css'

const GiftBoxes = () => {
  const giftBoxes = [
    { id: 13, name: 'Festival Gift Box', price: '₹1,299', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
    { id: 14, name: 'Premium Gift Hamper', price: '₹1,599', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
    { id: 15, name: 'Deluxe Gift Collection', price: '₹1,999', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
    { id: 16, name: 'Luxury Gift Box', price: '₹2,499', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
    { id: 17, name: 'Royal Gift Hamper', price: '₹2,999', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
    { id: 18, name: 'Exclusive Gift Box', price: '₹3,499', image: 'https://images.unsplash.com/photo-1615485925502-babf8aed3d43?w=800&q=80' },
  ]

  return (
    <section className="gift-boxes">
      <div className="container">
        <div className="gift-boxes-header">
          <h2 className="section-title">Latest Gift Boxes Collection</h2>
          <p>Celebrate all festivals in a healthy & delicious way with our exquisite range of dry fruit gift hampers.</p>
          <Link to="/shop?category=gift-boxes" className="btn btn-primary">View More</Link>
        </div>
        <div className="gift-boxes-grid">
          {giftBoxes.map(box => (
            <div key={box.id} className="gift-box-card">
              <div className="gift-box-image">
                <img 
                  src={box.image} 
                  alt={box.name}
                  className="gift-box-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="gift-box-placeholder" style={{display: 'none'}}>🎁</div>
              </div>
              <div className="gift-box-info">
                <h3>{box.name}</h3>
                <p className="gift-box-price">{box.price}</p>
                <Link to={`/product/${box.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftBoxes
