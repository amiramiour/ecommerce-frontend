import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/header.css";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");  
  };

  const handleLogout = () => {
    onLogout();
    navigate("/home");  
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={handleLogoClick}>
        Logo  {}
      </div>
      <nav className="header-nav">
        {user ? (
          <>
            <span className="nav-link">{user.name}</span>
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-link">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
