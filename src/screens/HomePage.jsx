import React from 'react';
import '../styles/HomePage.css';  // Importing the styling for HomePage

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <h1>Welcome to the E-commerce App</h1>
      <p>Explore our amazing products and collections!</p>
      <div className="home-links">
        <button className="home-btn" onClick={() => setCurrentPage("signup")}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
