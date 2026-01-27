import { useState } from "react";
import SEO from '../components/SEO'
import "./BulkOrder.css";

const BulkOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    products: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your bulk order inquiry! We will contact you soon with a quote."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      products: "",
      message: "",
    });
  };

  return (
    <main className="bulk-order-page">
      <SEO 
        title="Bulk Order - Wholesale Dry Fruits | Kashmir Dry Delight"
        description="Place bulk orders for premium dry fruits at wholesale prices. Competitive pricing, custom packaging, and flexible payment terms. Get a quote today!"
        keywords="bulk order dry fruits, wholesale nuts, bulk dry fruits, wholesale pricing, bulk order kashmir"
        url="/bulk-order"
      />
      <div className="container">
        <h1 className="page-title">Bulk Order</h1>

        <div className="bulk-order-content">
          <div className="bulk-order-info">
            <h2>Why Choose Us for Bulk Orders?</h2>
            <ul className="benefits-list">
              <li>✅ Competitive wholesale pricing</li>
              <li>✅ Custom packaging options</li>
              <li>✅ Flexible payment terms</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ Fast and reliable delivery</li>
              <li>✅ Quality assurance guarantee</li>
              <li>✅ Minimum order quantity flexibility</li>
              <li>✅ Special discounts for large orders</li>
            </ul>

            <div className="contact-info-box">
              <h3>For Bulk Order Inquiries</h3>
              <p>📞 +91-7051174849</p>
              <p>✉️ bulkorders@kashmirdrydelight.com</p>
            </div>
          </div>

          <div className="bulk-order-form-container">
            <h2>Request a Quote</h2>
            <form className="bulk-order-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Estimated Quantity (kg)</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 100, 500, 1000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="products">Products of Interest *</label>
                <textarea
                  id="products"
                  name="products"
                  rows="3"
                  value={formData.products}
                  onChange={handleChange}
                  placeholder="List the products you're interested in"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements, delivery timeline, etc."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BulkOrder;
