import React from "react";

const FormLabel = ({ htmlFor, label, required }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {label}
      {required && <span className="text-danger"> *</span>}
    </label>
  );
};

export default FormLabel;
