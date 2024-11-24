import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/form.css";  // Assurez-vous que ce fichier est déjà bien stylisé

const LoginForm = () => {
  return (
    <div className="page-container">
      <form className="form bg-light p-3">
        <InputField label="Email" type="email" name="email" required={true} />
        <InputField label="Password" type="password" name="password" required={true} />
        <div className="btn-group">
          <a href="/auth/register" className="btn btn-link">Sign Up</a>
          <Button
            label="Login"
            type="submit"
            className="btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
