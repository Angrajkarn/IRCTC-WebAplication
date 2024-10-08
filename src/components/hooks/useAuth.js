import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for managing authentication operations.
 * 
 * @param {string} loginUrl - The URL of the API endpoint for login.
 * @param {string} logoutUrl - The URL of the API endpoint for logout.
 * @param {function} onLoginSuccess - Callback function to handle successful login.
 * @param {function} onLoginError - Callback function to handle login errors.
 * @param {function} onLogoutSuccess - Callback function to handle successful logout.
 * @param {function} onLogoutError - Callback function to handle logout errors.
 * 
 * @returns {Object} - An object containing authentication state and methods.
 */
const useAuth = (
  loginUrl,
  logoutUrl,
  onLoginSuccess = null,
  onLoginError = null,
  onLogoutSuccess = null,
  onLogoutError = null
) => {
  const [user, setUser] = useState(null); // Current user state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to handle user login
  const login = useCallback(async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.status} ${response.statusText}`);
      }

      const userData = await response.json();
      setUser(userData);

      if (onLoginSuccess) onLoginSuccess(userData);
    } catch (err) {
      setError(err.message);
      if (onLoginError) onLoginError(err);
    } finally {
      setLoading(false);
    }
  }, [loginUrl, onLoginSuccess, onLoginError]);

  // Function to handle user logout
  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });

      if (!response.ok) {
        throw new Error(`Logout failed: ${response.status} ${response.statusText}`);
      }

      setUser(null);

      if (onLogoutSuccess) onLogoutSuccess();
    } catch (err) {
      setError(err.message);
      if (onLogoutError) onLogoutError(err);
    } finally {
      setLoading(false);
    }
  }, [logoutUrl, onLogoutSuccess, onLogoutError]);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth/status');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (err) {
        console.error('Error checking authentication status:', err);
      }
    };

    checkAuthStatus();
  }, []);

  return {
    user,
    loading,
    error,
    login,
    logout,
  };
};

export default useAuth;
