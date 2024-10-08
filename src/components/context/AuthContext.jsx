import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around components that need authentication data
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to login user
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/login', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to logout user
  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/logout', { // Replace with your API endpoint
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to logout');
      }
      setUser(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch current user
  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/user', { // Replace with your API endpoint
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user on component mount
  useEffect(() => {
    fetchUser().finally(() => setLoading(false));
  }, []);

  // Provide user data, loading, error, and functions to children components
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//it will also wrap with index.js