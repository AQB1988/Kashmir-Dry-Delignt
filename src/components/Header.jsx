import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span>📞 +91-7051174849</span>
              <span>✉️ info@kashmirdrydelight.com</span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <img
                src="/assets/images/logos/logo.png"
                alt="Kashmir Dry Delight"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  const text = e.target.nextElementSibling;
                  if (text) text.style.display = "block";
                }}
              />
              <h1 className="logo-text" style={{ display: "none" }}>
                Kashmir Dry Delight
              </h1>
            </Link>

            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              <div
                className="dropdown"
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                <Link to="/shop" className="dropdown-toggle">
                  Shop <span>+</span>
                </Link>
                <div className={`dropdown-menu ${isShopOpen ? "show" : ""}`}>
                  <Link to="/shop?category=nuts">Nuts & Dry Fruits</Link>
                  <Link to="/shop?category=dates">Dates</Link>
                  <Link to="/shop?category=exclusives">KDD Exclusives</Link>
                  <Link to="/shop?category=berries">Berries</Link>
                  <Link to="/shop?category=seeds">Seeds & More</Link>
                  <Link to="/shop?category=gift-boxes">Gift Boxes</Link>
                </div>
              </div>

              <Link to="/bulk-order" onClick={() => setIsMenuOpen(false)}>
                Bulk Order
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>

            <div className="nav-actions">
              <button className="search-btn" aria-label="Search">
                🔍
              </button>
              <button className="cart-btn" aria-label="Cart">
                🛒
              </button>
              <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
