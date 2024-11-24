// src/components/InputField.jsx
import React from "react";
import "./../styles/form.css";

const InputField = ({ label, type, name, required }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder=" "
        className="input-field"
      />
      <label htmlFor={name} className="input-label">
        {label} {required && "*"}
      </label>
    </div>
  );
};

export default InputField;
