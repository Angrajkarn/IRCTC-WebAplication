import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the TrainContext
const TrainContext = createContext();

// Custom hook to use TrainContext
export const useTrain = () => {
  return useContext(TrainContext);
};

// TrainProvider component to wrap around components that need access to train data
export const TrainProvider = ({ children }) => {
  // State to hold train data
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch train data
  const fetchTrainData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch train data');
      }
      const data = await response.json();
      setTrainData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch train data when the component mounts or URL changes
  useEffect(() => {
    const url = 'https://api.example.com/trains'; // Replace with your actual API endpoint
    fetchTrainData(url);
  }, []);

  // Provide train data, loading, error, and fetchTrainData function to children components
  return (
    <TrainContext.Provider value={{ trainData, loading, error, fetchTrainData }}>
      {children}
    </TrainContext.Provider>
  );
};

//we have to wrap this to index.js
// import { TrainProvider } from './contexts/trainContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <TrainProvider>
//       <App />
//     </TrainProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );