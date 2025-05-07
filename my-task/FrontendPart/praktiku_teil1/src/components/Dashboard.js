import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../services/api'; // api.js dosyasındaki fonksiyonu import ediyoruz

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProtectedData();
        setData(response);  // API'den gelen veriyi state'e kaydediyoruz
      } catch (err) {
        setError('Failed to load protected data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Protected Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
