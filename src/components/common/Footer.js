import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">PetShop</h3>
            <p className="footer-description">
              Your trusted partner for all pet care needs. We provide quality products 
              and services to keep your furry friends happy and healthy.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Shop</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/grooming" className="footer-link">Pet Grooming</Link></li>
              <li><Link to="/hotel" className="footer-link">Pet Hotel</Link></li>
              <li><Link to="/vet" className="footer-link">Veterinary Care</Link></li>
              <li><Link to="/training" className="footer-link">Pet Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Pet Street, Animal City, AC 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@petshop.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h4 className="newsletter-title">Subscribe to our Newsletter</h4>
          <p className="newsletter-description">
            Get updates on new products, services, and special offers!
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 PetShop. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;