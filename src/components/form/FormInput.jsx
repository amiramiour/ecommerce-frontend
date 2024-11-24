import React from "react";
import FormLabel from "./FormLabel";

const FormInput = ({ id, label, type, name, required }) => {
  return (
    <div className="my-3">
      <FormLabel htmlFor={id} label={label} required={required} />
      <input
        type={type}
        id={id}
        name={name}
        className="form-control"
        required={required}
      />
    </div>
  );
};

export default FormInput;
