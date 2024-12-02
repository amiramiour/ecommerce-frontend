import React, { useState } from "react";
import ProductManagement from "../components/ProductManagement";
import UserManagement from "../components/UserManagement";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [view, setView] = useState("products"); // Toggle between products and users

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-nav">
        <button
          className={view === "products" ? "active" : ""}
          onClick={() => setView("products")}
        >
          Manage Products
        </button>
        <button
          className={view === "users" ? "active" : ""}
          onClick={() => setView("users")}
        >
          Manage Users
        </button>
      </div>
      <div className="admin-content">
        {view === "products" && <ProductManagement />}
        {view === "users" && <UserManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
