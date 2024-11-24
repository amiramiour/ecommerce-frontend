// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './screens/RegisterForm';
import ProfilePage from './screens/ProfilePage'; 
import Home from './screens/Home'; 
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header with navigation */}
        <header className="header">
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </nav>
        </header>

        {/* Routing configuration */}
        <Switch>
          {/* Home Page */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* Register Page */}
          <Route path="/register">
            <RegisterForm />
          </Route>

          {/* Profile Page */}
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>

        {/* Footer */}
        <footer className="footer">
          <p>This is the footer.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
