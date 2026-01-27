import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import GiftBoxes from '../components/GiftBoxes'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FeaturedProducts from '../components/FeaturedProducts'
import SignatureGiftBoxes from '../components/SignatureGiftBoxes'
import './Home.css'

const Home = () => {
  return (
    <main>
      <SEO 
        title="Kashmir Dry Delight - Premium Dry Fruits & Nuts Online Store"
        description="Buy premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. 100% quality guarantee, fast shipping across India. Shop now!"
        keywords="dry fruits, nuts, almonds, cashews, dates, berries, kashmir dry fruits, premium nuts, gift boxes, online dry fruits"
        url="/"
      />
      <Hero />
      <Categories />
      <GiftBoxes />
      <Features />
      <Testimonials />
      <Newsletter />
      <FeaturedProducts />
      <SignatureGiftBoxes />
    </main>
  )
}

export default Home

