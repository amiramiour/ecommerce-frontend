//src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Remplacer Switch par Routes
import HomePage from "./screens/HomePage";
import RegisterForm from "./screens/RegisterForm";
import ProfilePage from "./screens/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({ name: "John Doe" });
  const [orders, setOrders] = useState([
    { id: "123", status: "Shipped", total: "$50" },
    { id: "124", status: "Processing", total: "$30" },
    { id: "125", status: "Delivered", total: "$75" },
  ]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/home" element={<HomePage setCurrentPage={() => {}} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<ProfilePage user={user} orders={orders} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
