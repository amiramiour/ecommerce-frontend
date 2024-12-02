import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Payment Accepted!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <button
        onClick={handleBackToHome}
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
