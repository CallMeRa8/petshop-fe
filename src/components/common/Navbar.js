import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User, Menu, X, Heart, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">PetShop</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          
          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <Link to="/services" className="nav-link">Services</Link>
            <div className="dropdown-content">
              <Link to="/grooming" className="dropdown-link">Pet Grooming</Link>
              <Link to="/hotel" className="dropdown-link">Pet Hotel</Link>
              <Link to="/vet" className="dropdown-link">Veterinary</Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>

        {/* Right Side Icons */}
        <div className="nav-actions">
          {/* Cart */}
          <Link to="/cart" className="nav-icon">
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="user-menu">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="user-button"
              >
                <User size={24} />
              </button>
              
              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-email">{user.email}</span>
                  </div>
                  <hr />
                  <Link to="/profile" className="dropdown-link" onClick={() => setIsUserMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/history" className="dropdown-link" onClick={() => setIsUserMenuOpen(false)}>
                    History
                  </Link>
                  <Link to="/order-status" className="dropdown-link" onClick={() => setIsUserMenuOpen(false)}>
                    Order Status
                  </Link>
                  <hr />
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-link">Login</Link>
              <Link to="/register" className="auth-button">Register</Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link to="/shop" className="mobile-link" onClick={toggleMenu}>Shop</Link>
          <Link to="/services" className="mobile-link" onClick={toggleMenu}>Services</Link>
          <Link to="/grooming" className="mobile-link" onClick={toggleMenu}>Pet Grooming</Link>
          <Link to="/hotel" className="mobile-link" onClick={toggleMenu}>Pet Hotel</Link>
          <Link to="/vet" className="mobile-link" onClick={toggleMenu}>Veterinary</Link>
          
          {!user && (
            <>
              <hr className="mobile-divider" />
              <Link to="/login" className="mobile-link" onClick={toggleMenu}>Login</Link>
              <Link to="/register" className="mobile-link" onClick={toggleMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;