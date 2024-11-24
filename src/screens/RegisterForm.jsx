// src/screens/RegisterForm.jsx
import React from "react";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Button from "../components/Button";
import "./../styles/form.css";

const RegisterForm = () => {
  return (
    <div className="page-container">
      <form className="form bg-light p-3">
        <InputField label="Email" type="email" name="email" required={true} />
        <div className="row">
          <InputField label="Password" type="password" name="password" required={true} />
          <InputField label="Repeat Password" type="password" name="re_password" required={true} />
        </div>
        <div className="row">
          <InputField label="First Name" type="text" name="first_name" />
          <InputField label="Last Name" type="text" name="last_name" />
        </div>
        <CheckboxField label="Receive marketing info" name="receive_marketing_info" checked={true} />
        <div className="btn-group">
          <a href="/login" className="btn btn-link">Login</a>
          <Button
            label="Register"
            type="submit"
            className="btn-primary"
            icon={<i className="fas fa-arrow-right"></i>}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
