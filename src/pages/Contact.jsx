import { useState } from "react";
import SEO from '../components/SEO'
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="contact-page">
      <SEO 
        title="Contact Us - Kashmir Dry Delight | Get in Touch"
        description="Contact Kashmir Dry Delight for inquiries about premium dry fruits, bulk orders, or customer support. We're here to help you!"
        keywords="contact kashmir dry delight, customer support, dry fruits inquiry"
        url="/contact"
      />
      <div className="container">
        <h1 className="page-title">Contact Us</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>Kashmir Valley, Srinagar, Jammu & Kashmir - 190001</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+91-7051174849</p>
            </div>
            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>info@kashmirdrydelight.com</p>
            </div>
            <div className="info-item">
              <h3>🕒 Business Hours</h3>
              <p>
                Monday - Saturday: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
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
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
