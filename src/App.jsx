import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";  // N'oubliez pas d'importer Routes et Route

import HomePage from "./screens/HomePage";
import RegisterForm from "./screens/RegisterForm";
import ProfilePage from "./screens/ProfilePage";
import LoginForm from "./screens/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([
    { id: "123", status: "Shipped", total: "$50" },
    { id: "124", status: "Processing", total: "$30" },
    { id: "125", status: "Delivered", total: "$75" },
  ]);
  
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ name: "John Doe" });
    navigate("/profile");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  return (
    <div className="app-container">
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<ProfilePage user={user} orders={orders} onLogout={handleLogout} />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
