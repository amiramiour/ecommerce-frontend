// src/components/Checkbox.jsx
import React from 'react';

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-check my-3">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
