import React from "react";
import { Link } from "react-router-dom";
import "./../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="header-nav">
        <Link to="/auth/signin" className="nav-link">Sign In</Link>
        <Link to="/auth/signup" className="nav-link">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
