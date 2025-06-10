import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with IDs
    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Navigation handlers
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleCTAClick = () => {
    // Add your CTA logic here
    console.log('CTA clicked');
  };

  // Floating Orb Component
  const FloatingOrb = ({ size, color, delay, duration, top, left }) => (
    <div 
      className="floating-orb"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40, ${color}10)`,
        animationDelay: delay,
        animationDuration: duration,
        top: top,
        left: left,
      }}
    />
  );

  // Particle Field Component
  const ParticleField = () => (
    <div className="particle-field">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="home-container">
      {/* Floating Orbs */}
      <FloatingOrb 
        size="200px" 
        color="#667eea" 
        delay="0s" 
        duration="8s"
        top="10%"
        left="10%"
      />
      <FloatingOrb 
        size="150px" 
        color="#f093fb" 
        delay="2s" 
        duration="6s"
        top="60%"
        left="80%"
      />
      <FloatingOrb 
        size="100px" 
        color="#764ba2" 
        delay="4s" 
        duration="10s"
        top="30%"
        left="70%"
      />

      {/* Particle Field */}
      <ParticleField />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">✨ DreamSpace</div>
          <div className="auth-buttons">
            <button className="btn login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="btn signup-btn" onClick={handleSignupClick}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div 
          className="hero-content"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <h1 className="hero-title">Welcome to the Future</h1>
          <p className="hero-subtitle">Experience innovation like never before</p>
          <button className="cta-button" onClick={handleCTAClick}>
            Explore Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="features-container">
          <h2 className={`section-title ${isVisible.features ? 'visible' : ''}`}>
            Why Choose Us?
          </h2>
          <div className="features-grid">
            <div 
              className={`feature-card ${isVisible.features ? 'visible' : ''}`} 
              style={{transitionDelay: '0.1s'}}
            >
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Experience blazing-fast performance with our cutting-edge technology 
                that delivers results in milliseconds.
              </p>
            </div>
            <div 
              className={`feature-card ${isVisible.features ? 'visible' : ''}`} 
              style={{transitionDelay: '0.3s'}}
            >
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Ultra Secure</h3>
              <p className="feature-description">
                Your data is protected with military-grade encryption and advanced 
                security protocols you can trust.
              </p>
            </div>
            <div 
              className={`feature-card ${isVisible.features ? 'visible' : ''}`} 
              style={{transitionDelay: '0.5s'}}
            >
              <div className="feature-icon">🌟</div>
              <h3 className="feature-title">Amazing Experience</h3>
              <p className="feature-description">
                Enjoy a seamless, intuitive interface designed to make every 
                interaction delightful and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        <div className="stats-grid">
          <div 
            className={`stat-item ${isVisible.stats ? 'visible' : ''}`} 
            style={{transitionDelay: '0.1s'}}
          >
            <span className="stat-number">1M+</span>
            <span className="stat-label">Happy Users</span>
          </div>
          <div 
            className={`stat-item ${isVisible.stats ? 'visible' : ''}`} 
            style={{transitionDelay: '0.3s'}}
          >
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div 
            className={`stat-item ${isVisible.stats ? 'visible' : ''}`} 
            style={{transitionDelay: '0.5s'}}
          >
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
          <div 
            className={`stat-item ${isVisible.stats ? 'visible' : ''}`} 
            style={{transitionDelay: '0.7s'}}
          >
            <span className="stat-number">150+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;