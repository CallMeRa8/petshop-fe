import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ServiceProvider } from './context/ServiceContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ChangePassword from './components/auth/ChangePassword';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Cart from './components/shop/Cart';
import Checkout from './components/shop/Checkout';
import Grooming from './components/services/Grooming';
import Hotel from './components/services/Hotel';
import Vet from './components/services/Vet';
import ShoppingHistory from './components/history/ShoppingHistory';
import ServiceHistory from './components/history/ServiceHistory';
import OrderStatus from './components/history/OrderStatus';
import Payment from './components/payment/Payment';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ServiceProvider>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/services/grooming" element={<Grooming />} />
                  <Route path="/services/hotel" element={<Hotel />} />
                  <Route path="/services/vet" element={<Vet />} />
                  <Route path="/history/shopping" element={<ShoppingHistory />} />
                  <Route path="/history/services" element={<ServiceHistory />} />
                  <Route path="/order-status" element={<OrderStatus />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ServiceProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;