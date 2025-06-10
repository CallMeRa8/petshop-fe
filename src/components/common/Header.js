import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User, LogOut, Heart } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🐾 PawShop
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            {user && <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile" className="text-gray-700 hover:text-blue-600">
                  <User size={24} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600"
                >
                  <LogOut size={24} />
                </button>
              </div>
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="btn-primary">Login</Link>
                <Link to="/register" className="btn-secondary">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;