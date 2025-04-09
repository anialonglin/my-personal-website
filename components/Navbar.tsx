import React from 'react';
import '../styles/homepage.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CYBER<span className="logo-accent">FOLIO</span>
      </div>
      <ul className="nav-links">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}