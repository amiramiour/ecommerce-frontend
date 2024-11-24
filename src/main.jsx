import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";  // Utilisation du BrowserRouter
import App from "./App";

ReactDOM.render(
  <BrowserRouter>  {/* Enveloppe votre App dans le Router */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
