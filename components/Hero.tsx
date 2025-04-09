import React from 'react';
import '../styles/homepage.css'; 

export default function Hero() {
  return (
    <div className="hero">
      {/* Background Effects */}
      <div className="three-bg">
        <div className="grid-lines"></div>
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="scanner-line"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title glitch-hover" data-text="ANIA WORLD">
          Ania's World
        </h1>
        <h2 className="hero-subtitle glitch-hover" data-text="FULL STACK DEVELOPER">
          FULL STACK DEVELOPER
        </h2>
        <p className="hero-description">
          Building futuristic digital experiences with cutting-edge technologies
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}