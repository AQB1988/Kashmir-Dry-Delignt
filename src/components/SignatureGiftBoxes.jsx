import { Link } from 'react-router-dom'
import './SignatureGiftBoxes.css'

const SignatureGiftBoxes = () => {
  const giftBoxes = [
    { id: 15, name: 'Gift Box Collection', price: '₹1,999', image: '/assets/images/gift-boxes/gift-box-deluxe.jpg' },
    { id: 16, name: 'Gift Box Collection', price: '₹2,499', image: '/assets/images/gift-boxes/gift-box-luxury.jpg' },
    { id: 17, name: 'Gift Box Collection', price: '₹2,999', image: '/assets/images/gift-boxes/gift-box-royal.jpg' },
    { id: 18, name: 'Gift Box Collection', price: '₹3,499', image: '/assets/images/gift-boxes/gift-box-exclusive.jpg' },
    { id: 19, name: 'Gift Box Collection', price: '₹3,999', image: '/assets/images/gift-boxes/gift-box-signature-5.jpg' },
    { id: 20, name: 'Gift Box Collection', price: '₹4,499', image: '/assets/images/gift-boxes/gift-box-signature-6.jpg' },
  ]

  return (
    <section className="signature-gift-boxes">
      <div className="container">
        <h2 className="section-title">Gift Boxes - Signature Collection</h2>
        <div className="signature-gift-boxes-grid">
          {giftBoxes.map(box => (
            <div key={box.id} className="signature-gift-box-card">
              <div className="signature-gift-box-image">
                <img 
                  src={box.image} 
                  alt={box.name}
                  className="signature-gift-box-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="blog-img" style={{display: 'none'}}>🎁</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="signature-gift-box-info">
                <h3>{box.name}</h3>
                <Link to={`/product/${box.id}`} className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureGiftBoxes
