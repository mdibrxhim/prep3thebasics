import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', formData);
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    alert(`Login with ${provider} coming soon!`);
  };

  return (
    <div className="login-container">
      <div className="background-animation"></div>
      <div className="login-box">
        <div className="login-header">
          <img
            src="https://img.icons8.com/fluency/96/lock--v1.png"
            alt="Login Icon"
            className="login-icon"
          />
          <h1>Welcome Back</h1>
          <p>Please login to your account</p>
        </div>

        <div className="social-login">
          <button
            className="social-btn google"
            onClick={() => handleSocialLogin('Google')}
            aria-label="Login with Google"
          >
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="" />
            Google
          </button>
          <button
            className="social-btn facebook"
            onClick={() => handleSocialLogin('Facebook')}
            aria-label="Login with Facebook"
          >
            <img src="https://img.icons8.com/color/24/facebook-new.png" alt="" />
            Facebook
          </button>
          <button
            className="social-btn github"
            onClick={() => handleSocialLogin('GitHub')}
            aria-label="Login with GitHub"
          >
            <img src="https://img.icons8.com/ios-glyphs/24/000000/github.png" alt="" />
            GitHub
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
