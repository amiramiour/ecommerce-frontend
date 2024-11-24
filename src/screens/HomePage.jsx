//src/screens/HomePage.jsx
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <Header />
      <div className="home-content">
        <h1>Welcome to the E-commerce App</h1>
        <p>Explore our amazing products and collections!</p>
        <div className="home-links">
          <button className="home-btn" onClick={() => setCurrentPage("signup")}>
            Register Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
