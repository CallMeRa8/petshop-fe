import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ServiceProvider } from './context/ServiceContext';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Grooming from './pages/Grooming';
import Hotel from './pages/Hotel';
import Vet from './pages/Vet';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import OrderStatus from './pages/OrderStatus';
import Profile from './pages/Profile';
import History from './pages/History';

// Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Styles
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ServiceProvider>
          <Router>
            <div className="App">
              <Navbar />
              
              <main className="main-content">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Service Routes */}
                  <Route path="/grooming" element={<Grooming />} />
                  <Route path="/hotel" element={<Hotel />} />
                  <Route path="/vet" element={<Vet />} />
                  
                  {/* Protected Routes */}
                  <Route path="/cart" element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  } />
                  <Route path="/payment" element={
                    <ProtectedRoute>
                      <Payment />
                    </ProtectedRoute>
                  } />
                  <Route path="/order-status" element={
                    <ProtectedRoute>
                      <OrderStatus />
                    </ProtectedRoute>
                  } />
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } />
                  <Route path="/history" element={
                    <ProtectedRoute>
                      <History />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              
              <Footer />
              <ToastContainer position="top-right" autoClose={5000} />
            </div>
          </Router>
        </ServiceProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;