import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🐾 PawShop</h3>
            <p className="text-gray-300">
              Your one-stop destination for all pet needs. From food to grooming, 
              we care for your furry friends like our own.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/services/grooming" className="text-gray-300 hover:text-white">Grooming</Link></li>
              <li><Link to="/services/hotel" className="text-gray-300 hover:text-white">Pet Hotel</Link></li>
              <li><Link to="/services/vet" className="text-gray-300 hover:text-white">Veterinary</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/order-status" className="text-gray-300 hover:text-white">Order Status</Link></li>
              <li><Link to="/history/shopping" className="text-gray-300 hover:text-white">Order History</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">info@pawshop.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-gray-300">123 Pet Street, City, State</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <Facebook size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-300">&copy; 2024 PawShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
