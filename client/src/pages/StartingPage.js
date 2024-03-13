import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/css/components/SpinEarth.css'; // Adjust this path if necessary

const StartingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="starting-page-container">
      <div className="earth"></div>
      <div className="starting-page-buttons">
        <button onClick={() => console.log('Admin Login')}>Admin</button>
        <button onClick={() => navigate('/map')}>Public User</button>
      </div>
    </div>
  );
};

export default StartingPage;



