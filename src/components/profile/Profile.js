import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Phone, MapPin, Edit, Lock, History, Calendar } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-md mx-auto">
        <div className="card text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">Please log in to view your profile.</p>
          <Link to="/login" className="btn-primary">Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              <Link to="/edit-profile" className="btn-primary flex items-center">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="mr-3 text-gray-400" size={20} />
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="text-gray-900">{user.name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="mr-3 text-gray-400" size={20} />
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-3 text-gray-400" size={20} />
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{user.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-gray-400 mt-1" size={20} />
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <p className="text-gray-900">{user.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/change-password" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
                <Lock size={16} className="mr-3" />
                Change Password
              </Link>
              <Link to="/history/shopping" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
                <History size={16} className="mr-3" />
                Order History
              </Link>
              <Link to="/history/services" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
                <Calendar size={16} className="mr-3" />
                Service History
              </Link>
              <Link to="/order-status" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
                <History size={16} className="mr-3" />
                Order Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;