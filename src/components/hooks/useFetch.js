import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for fetching data from an API.
 * 
 * @param {string} url - The URL of the API endpoint.
 * @param {Object} options - Fetch options like method, headers, body, etc.
 * @param {boolean} immediate - If false, the fetch will only be triggered manually.
 * @param {function} onSuccess - Callback function to handle successful data fetch.
 * @param {function} onError - Callback function to handle fetch errors.
 * 
 * @returns {Object} - An object containing `data`, `loading`, `error`, and `refetch`.
 */
const useFetch = (url, options = {}, immediate = true, onSuccess = null, onError = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  // Function to fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err.message);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  }, [url, options, onSuccess, onError]);

  // Fetch data immediately if `immediate` is true
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  // Function to manually trigger fetch
  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
