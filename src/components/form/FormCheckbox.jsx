import React from "react";

const FormCheckbox = ({ id, label, name }) => {
  return (
    <div className="form-check my-3">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="form-check-input"
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default FormCheckbox;
