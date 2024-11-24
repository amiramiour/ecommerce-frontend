import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../styles/profile.css"; 

const ProfilePage = ({ user, orders, onLogout }) => {
  if (!user) {
    return <div>Please log in to view your profile.</div>;  // Message si l'utilisateur n'est pas connecté
  }

  return (
    <div className="profile-page">
      <Header user={user} onLogout={onLogout} />
      <h1>Welcome, {user.name}</h1>
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
