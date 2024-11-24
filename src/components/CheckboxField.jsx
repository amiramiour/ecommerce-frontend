// src/components/CheckboxField.jsx
import React from "react";
import "./../styles/form.css";

const CheckboxField = ({ label, name, checked }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={checked}
        className="checkbox-input"
      />
      <label htmlFor={name} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
