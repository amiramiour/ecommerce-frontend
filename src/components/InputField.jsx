// src/components/InputField.jsx
import React from 'react';

const InputField = ({ label, type, name, required = false }) => {
  return (
    <div className="form-group my-3">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="text-danger">&nbsp;*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="form-control"
      />
    </div>
  );
};

export default InputField;
