import React, { useState } from "react";
import RegisterForm from "./screens/RegisterForm";
import HomePage from "./screens/HomePage";  // Import HomePage component
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Manage page state

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">Logo</div>
        <nav className="header-nav">
          {currentPage !== "signin" && currentPage !== "signup" && (
            <>
              <button
                className="nav-link"
                onClick={() => setCurrentPage("signin")}
              >
                Sign In
              </button>
              <button
                className="nav-link"
                onClick={() => setCurrentPage("signup")}
              >
                Sign Up
              </button>
            </>
          )}
          {(currentPage === "signin" || currentPage === "signup") && (
            <button className="nav-link" onClick={() => setCurrentPage("home")}>
              Back to Home
            </button>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
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
