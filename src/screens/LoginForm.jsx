import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/form.css";  

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/profile");
  };

  return (
    <div className="page-container">
      <form className="form bg-light p-3" onSubmit={handleSubmit}>
        <InputField label="Email" type="email" name="email" required={true} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" name="password" required={true} onChange={(e) => setPassword(e.target.value)} />
        <div className="btn-group">
          <a href="/auth/register" className="btn btn-link">Sign Up</a>
          <Button label="Login" type="submit" className="btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
