import React, { createContext, useContext, useState } from 'react';
import { bookingService } from '../services/bookingService';

const ServiceContext = createContext();

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};

export const ServiceProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const bookGrooming = async (bookingData) => {
    setLoading(true);
    try {
      const booking = await bookingService.bookGrooming(bookingData);
      setBookings(prev => [...prev, booking]);
      return { success: true, booking };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const bookHotel = async (bookingData) => {
    setLoading(true);
    try {
      const booking = await bookingService.bookHotel(bookingData);
      setBookings(prev => [...prev, booking]);
      return { success: true, booking };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const bookVet = async (bookingData) => {
    setLoading(true);
    try {
      const booking = await bookingService.bookVet(bookingData);
      setBookings(prev => [...prev, booking]);
      return { success: true, booking };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const getBookingHistory = async () => {
    setLoading(true);
    try {
      const history = await bookingService.getBookingHistory();
      setBookings(history);
      return history;
    } catch (error) {
      console.error('Error fetching booking history:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      await bookingService.cancelBooking(bookingId);
      setBookings(prev => prev.filter(booking => booking.id !== bookingId));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    bookings,
    loading,
    bookGrooming,
    bookHotel,
    bookVet,
    getBookingHistory,
    cancelBooking
  };

  return (
    <ServiceContext.Provider value={value}>
      {children}
    </ServiceContext.Provider>
  );
};