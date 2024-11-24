// src/screens/RegisterScreen.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const RegisterScreen = () => {
  const [receiveMarketing, setReceiveMarketing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
        <h2 className="mb-4">Register</h2>
        <InputField label="Email" type="email" name="email" required />
        <div className="row">
          <div className="col-sm-6">
            <InputField label="Password" type="password" name="password" required />
          </div>
          <div className="col-sm-6">
            <InputField label="Repeat Password" type="password" name="re_password" required />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <InputField label="First Name" type="text" name="first_name" />
          </div>
          <div className="col-sm-6">
            <InputField label="Last Name" type="text" name="last_name" />
          </div>
        </div>
        <Checkbox
          label="Receive marketing info"
          name="receive_marketing"
          checked={receiveMarketing}
          onChange={() => setReceiveMarketing(!receiveMarketing)}
        />
        <div className="d-flex justify-content-between">
          <a href="/auth/login" className="btn btn-link">
            Login
          </a>
          <Button
            type="submit"
            label="Register"
            className="btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
