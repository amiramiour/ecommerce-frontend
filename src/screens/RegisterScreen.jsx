import React from "react";
import Container from "../components/layout/Container";
import FormWrapper from "../components/layout/FormWrapper";
import FormInput from "../components/form/FormInput";
import FormCheckbox from "../components/form/FormCheckbox";
import FormRow from "../components/form/FormRow";
import SubmitButton from "../components/form/SubmitButton";
import "../assets/styles/Form.css";

const RegisterScreen = () => {
  return (
    <Container>
      <FormWrapper>
        {/* Email */}
        <FormInput id="email" label="Email" type="email" name="email" required />

        {/* Passwords */}
        <FormRow>
          <div className="col-sm-6">
            <FormInput
              id="password"
              label="Password"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="col-sm-6">
            <FormInput
              id="repeatPassword"
              label="Repeat Password"
              type="password"
              name="repeatPassword"
              required
            />
          </div>
        </FormRow>

        {/* Names */}
        <FormRow>
          <div className="col-sm-6">
            <FormInput id="firstName" label="First Name" type="text" name="firstName" />
          </div>
          <div className="col-sm-6">
            <FormInput id="lastName" label="Last Name" type="text" name="lastName" />
          </div>
        </FormRow>

        {/* Checkbox */}
        <FormCheckbox
          id="marketing"
          label="Receive marketing info"
          name="receive_marketing_info"
        />

        {/* Buttons */}
        <div className="my-3 text-end">
          <a href="/auth/login" className="btn btn-link me-2">
            Login
          </a>
          <SubmitButton text="Register" />
        </div>
      </FormWrapper>
    </Container>
  );
};

export default RegisterScreen;
