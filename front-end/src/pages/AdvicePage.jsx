import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Advice1 from '../components/Advice1';

const AdvicePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/advice2');
    }, 2000);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div>
      <Advice1 />
    </div>
  );
};

export default AdvicePage;