// src/screens/Home.jsx
import React from 'react';
import './../styles/home.css'; // Add any specific styles if needed

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Store</h1>
      <p>Find the best cases for your devices</p>
      <div className="featured-products">
        <h3>Featured Products</h3>
        {/* Add product items here */}
        <ul>
          <li>iPhone Case</li>
          <li>iPad Case</li>
          <li>Samsung Case</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
