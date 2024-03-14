import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../static/css/components/SpinEarth.css'; // Adjust this path if necessary

const StartingPage = () => {
  return (
    <div className="starting-page-container">
      <div className="earth"></div>
      <div className="starting-page-buttons">
        {/* Keep the Admin button as is if it doesn't navigate, or adjust as needed */}
        <button onClick={() => console.log('Admin Login')}>Admin</button>
        {/* Apply button-like styles to this Link */}
        <Link to="/map" className="button-like">Public User</Link>
      </div>
    </div>
  );
};

export default StartingPage;




