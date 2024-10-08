import { useState, useCallback } from 'react';

/**
 * Custom hook for managing booking operations.
 * 
 * @param {string} apiUrl - The URL of the API endpoint for booking.
 * @param {Object} defaultBooking - The default booking data.
 * @param {boolean} immediate - If true, the booking process will be initiated immediately.
 * @param {function} onSuccess - Callback function to handle successful booking.
 * @param {function} onError - Callback function to handle booking errors.
 * 
 * @returns {Object} - An object containing booking state and methods.
 */
const useBooking = (apiUrl, defaultBooking = {}, immediate = false, onSuccess = null, onError = null) => {
  const [bookingData, setBookingData] = useState(defaultBooking);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle booking submission
  const submitBooking = useCallback(async (bookingDetails = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setBookingData(result);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err.message);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl, onSuccess, onError]);

  // Function to handle changes to booking data
  const updateBooking = (updatedData) => {
    setBookingData(prevData => ({ ...prevData, ...updatedData }));
  };

  // Initiate booking process if `immediate` is true
  useEffect(() => {
    if (immediate) {
      submitBooking(defaultBooking);
    }
  }, [immediate, defaultBooking, submitBooking]);

  return {
    bookingData,
    loading,
    error,
    submitBooking,
    updateBooking,
  };
};

export default useBooking;
