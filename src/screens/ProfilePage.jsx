// src/screens/ProfilePage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/profile.css"; 

const ProfilePage = ({ user, orders, onLogout }) => {
  return (
    <div className="profile-page">
      <h1>Welcome, {user ? user.name : "Guest"}</h1> {/* Affiche "Guest" si aucun utilisateur n'est connecté */}
      <div className="orders-section">
        <h2>My Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
