import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Scissors, Hotel, Stethoscope, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Pet Grooming',
      description: 'Professional grooming services to keep your pet looking and feeling great',
      icon: <Scissors size={40} />,
      link: '/grooming',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Pet Hotel',
      description: 'Safe and comfortable boarding for your pets when you\'re away',
      icon: <Hotel size={40} />,
      link: '/hotel',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Veterinary Care',
      description: 'Expert medical care and health checkups for your beloved pets',
      icon: <Stethoscope size={40} />,
      link: '/vet',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Dog Food',
      price: 45.99,
      image: '/api/placeholder/300/300',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Cat Litter Box',
      price: 29.99,
      image: '/api/placeholder/300/300',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Pet Carrier',
      price: 89.99,
      image: '/api/placeholder/300/300',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Dog Toy Set',
      price: 19.99,
      image: '/api/placeholder/300/300',
      rating: 4.7
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Everything Your Pet Needs,
              <span className="hero-highlight"> All in One Place</span>
            </h1>
            <p className="hero-description">
              From premium pet products to professional services, we provide complete care 
              for your furry family members. Shop online or book our services today!
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="hero-button primary">
                <ShoppingBag size={20} />
                Shop Now
              </Link>
              <Link to="/services" className="hero-button secondary">
                Our Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/600/400" alt="Happy pets" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-description">
              Professional care services designed to keep your pets happy and healthy
            </p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className={`service-icon ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-description">
              Top-rated products loved by pets and their owners
            </p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/shop" className="view-all-btn">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose PetShop?</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Delivery</h3>
              <p>Free delivery on orders over $50</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Only the best products for your pets</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🏥</div>
              <h3>Expert Care</h3>
              <p>Professional veterinary services</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated!</h2>
            <p className="newsletter-description">
              Get the latest updates on products, services, and special offers
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
        </div>
      </section>
    </div>
  );
};

export default Home;