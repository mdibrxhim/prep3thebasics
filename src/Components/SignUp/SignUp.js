import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // Here you would typically handle the signup logic
    console.log('Signup attempt with:', formData);
    // After successful signup, navigate to login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-avatar">
          <FaUserPlus size={48} color="#6B73FF" />
        </div>
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join us and start your journey</p>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">Create Account</button>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
        <div className="guest-link">
          <Link to="/">&#8592; Continue as Guest / Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 