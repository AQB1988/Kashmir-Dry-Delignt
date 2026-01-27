import SEO from '../components/SEO'
import './About.css'

const About = () => {
  return (
    <main className="about-page">
      <SEO 
        title="About Us - Kashmir Dry Delight | Premium Dry Fruits"
        description="Learn about Kashmir Dry Delight - your trusted source for premium quality dry fruits from Kashmir. We bring you the finest selection with 100% quality guarantee."
        keywords="about kashmir dry delight, premium dry fruits kashmir, quality dry fruits, kashmir nuts"
        url="/about"
      />
      <div className="container">
        <h1 className="page-title">About Kashmir Dry Delight</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Kashmir Dry Delight brings you a collection of carefully selected premium dry fruits from the beautiful 
              valleys of Kashmir and across the world. We are committed to providing the highest quality products 
              that are not only delicious but also nutritious.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make premium quality dry fruits accessible to everyone while maintaining the highest 
              standards of quality and freshness. We source our products directly from trusted farmers and suppliers 
              to ensure you get the best.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>✅ 100% Premium Quality Guarantee</li>
              <li>✅ Direct sourcing from Kashmir and global suppliers</li>
              <li>✅ Fresh and carefully selected products</li>
              <li>✅ Swift delivery across India</li>
              <li>✅ Easy return policy</li>
              <li>✅ 24/7 customer support</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <p>
              At Kashmir Dry Delight, we believe in quality, authenticity, and customer satisfaction. Every product 
              we offer is carefully selected, tested, and packaged to ensure it reaches you in perfect condition. 
              We take pride in bringing you the finest dry fruits that celebrate the rich heritage of Kashmir.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About

