import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="main-title">About Us</h1>
        <p className="subtitle">Discover Our Story</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We are dedicated to providing exceptional service and creating meaningful
            experiences for our customers. Our commitment to excellence drives everything we do.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            To be the leading platform that connects people with innovative solutions,
            making a positive impact in the digital world.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Pushing boundaries and embracing change</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Honest and transparent in all our dealings</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Building strong relationships and support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;