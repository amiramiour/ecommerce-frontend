import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importez useNavigate
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();  // Créez l'instance de navigate

  // Fonction pour gérer le clic sur le bouton
  const handleRegisterClick = () => {
    navigate('/register');  // Redirige vers /register
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to the E-commerce App</h1>
        <p>Explore our amazing products and collections!</p>
        <div className="home-links">
          <button className="home-btn" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
