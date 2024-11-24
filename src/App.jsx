import React, { useState } from "react";
import RegisterForm from "./screens/RegisterForm";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); 

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">Logo</div>
        <nav className="header-nav">
          <button className="nav-link" onClick={() => setCurrentPage("signin")}>
            Sign In
          </button>
          <button className="nav-link" onClick={() => setCurrentPage("signup")}>
            Sign Up
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        {currentPage === "home" && (
          <div>
            <h1>Welcome to the E-commerce App</h1>
            <p>Explore our amazing products and collections!</p>
          </div>
        )}
        {currentPage === "signup" && <RegisterForm />}
        {currentPage === "signin" && (
          <div>
            <h1>Sign In Page</h1>
            <p>Sign In form will be added here.</p>
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>This is footer.</p>
      </footer>
    </div>
  );
};

export default App;
