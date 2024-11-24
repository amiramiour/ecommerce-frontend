import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import RegisterForm from "./screens/RegisterForm";
import LoginForm from "./screens/LoginForm";  // Import du formulaire de connexion
import ProfilePage from "./screens/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([
    { id: "123", status: "Shipped", total: "$50" },
    { id: "124", status: "Processing", total: "$30" },
    { id: "125", status: "Delivered", total: "$75" },
  ]);

  const handleLogin = (userData) => {
    setUser(userData);  // L'utilisateur se connecte
  };

  const handleLogout = () => {
    setUser(null);  // Déconnexion de l'utilisateur
  };

  return (
    <Router>
      <div className="app-container">
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />  {/* Route vers le LoginForm */}
          <Route path="/profile" element={<ProfilePage user={user} orders={orders} onLogout={handleLogout} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
