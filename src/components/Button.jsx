// src/components/Button.jsx
import React from "react";
import "./../styles/form.css";

const Button = ({ label, type, className, onClick, icon }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
