// src/components/InputField.jsx
import React from "react";
import "./../styles/form.css";

const InputField = ({ label, type, name, required }) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
