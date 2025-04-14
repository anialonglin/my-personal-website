import React from 'react';
import Link from 'next/link';
import '../styles/homepage.css'; 
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const email = "anialin327";
  const domain = "gmail.com";

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
          <Link href="/about" className="btn btn-primary">
            About Me
          </Link>
          <a href="https://www.linkedin.com/in/ania-lin" target="_blank" rel="noopener noreferrer" className="btn">
            Connect with me
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-social-links">
          <a href="https://www.linkedin.com/in/ania-lin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/anialonglin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a
            href={`mailto:${email}@${domain}`}
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}