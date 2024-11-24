import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};

export default SubmitButton;
