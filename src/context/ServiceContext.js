import React, { createContext, useContext, useReducer } from 'react';

const ServiceContext = createContext();

const serviceReducer = (state, action) => {
  switch (action.type) {
    case 'BOOK_SERVICE':
      return {
        ...state,
        bookings: [...state.bookings, { ...action.payload, id: Date.now() }]
      };
    
    case 'CANCEL_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== action.payload)
      };
    
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking.id === action.payload.id
            ? { ...booking, ...action.payload.updates }
            : booking
        )
      };
    
    default:
      return state;
  }
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};

export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(serviceReducer, {
    bookings: []
  });

  const bookService = (serviceData) => {
    dispatch({ type: 'BOOK_SERVICE', payload: serviceData });
  };

  const cancelBooking = (bookingId) => {
    dispatch({ type: 'CANCEL_BOOKING', payload: bookingId });
  };

  const updateBooking = (bookingId, updates) => {
    dispatch({ type: 'UPDATE_BOOKING', payload: { id: bookingId, updates } });
  };

  const value = {
    bookings: state.bookings,
    bookService,
    cancelBooking,
    updateBooking
  };

  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
};