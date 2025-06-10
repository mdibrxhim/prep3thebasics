import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Discover amazing features and possibilities</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="content-card">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="feature">
              <h3>Feature 2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="feature">
              <h3>Feature 3</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 