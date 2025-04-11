'use client'

import React, { useState } from "react";
import Link from "next/link";
import "../app/globals.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        CYBER<span className="logo-accent">FOLIO</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {[
          { name: "Home", href: "/" },
          { name: "About Me", href: "/about" },
          { name: "Projects", href: "/projects" },
        ].map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}