// src/components/Button.jsx
import React from 'react';

const Button = ({ type, label, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
