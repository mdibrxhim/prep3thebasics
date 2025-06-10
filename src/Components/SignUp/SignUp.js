import React, { useState, useEffect } from 'react';
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

  // Create particles dynamically
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;

      // Clear existing particles
      particlesContainer.innerHTML = '';

      // Create 30 particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
    
    // Recreate particles every 10 seconds for continuous effect
    const interval = setInterval(createParticles, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }
    
    // Here you would typically handle the signup logic
    console.log('Signup attempt with:', formData);
    
    // Show success animation or message here
    alert('Account created successfully!');
    
    // After successful signup, navigate to login page
    navigate('/login');
  };

  // Floating Shape Component
  const FloatingShape = ({ className, style }) => (
    <div className={`floating-shape ${className}`} style={style} />
  );

  // Geometric Shape Component
  const GeometricShape = ({ type }) => (
    <div className={`geometric-shape ${type}`} />
  );

  // Glowing Orb Component
  const GlowingOrb = ({ style }) => (
    <div className="glowing-orb" style={style} />
  );

  return (
    <div className="signup-container">
      {/* Animated Background */}
      <div className="bg-animation">
        {/* Floating Shapes */}
        <FloatingShape />
        <FloatingShape />
        <FloatingShape />
        <FloatingShape />
        <FloatingShape />
        <FloatingShape />
        
        {/* Geometric Shapes */}
        <GeometricShape type="triangle" />
        <GeometricShape type="square" />
        <GeometricShape type="diamond" />
        
        {/* Glowing Orbs */}
        <GlowingOrb />
        <GlowingOrb />
        
        {/* Particles Container */}
        <div className="particles"></div>
      </div>

      {/* Signup Form */}
      <div className="signup-box">

        
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join us and start your magical journey</p>
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
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
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
              placeholder="Create a strong password"
              required
              minLength="6"
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
              minLength="6"
            />
          </div>
          
          <button type="submit" className="signup-button">
            Create Account
          </button>
          
          <div className="login-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
        
        <div className="guest-link">
          <Link to="/">← Continue as Guest / Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;