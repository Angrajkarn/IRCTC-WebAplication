import React, { createContext, useContext, useState, useCallback } from 'react';

// Create BookingContext
const BookingContext = createContext();

// Custom hook to use BookingContext
export const useBooking = () => useContext(BookingContext);

// BookingProvider component to wrap around components that need booking data
export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch booking details
  const fetchBookingDetails = useCallback(async (bookingId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/bookings/${bookingId}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch booking details');
      }
      const data = await response.json();
      setBookingDetails(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to update booking details
  const updateBookingDetails = useCallback(async (bookingId, updateData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, { // Replace with your API endpoint
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) {
        throw new Error('Failed to update booking details');
      }
      const data = await response.json();
      setBookingDetails(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to cancel a booking
  const cancelBooking = useCallback(async (bookingId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, { // Replace with your API endpoint
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
      setBookingDetails(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Provide booking details, loading, error, and functions to children components
  return (
    <BookingContext.Provider
      value={{
        bookingDetails,
        loading,
        error,
        fetchBookingDetails,
        updateBookingDetails,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

//we have to wrap the index.js with
// import { BookingProvider } from './contexts/BookingContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <BookingProvider>
//       <App />
//     </BookingProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );