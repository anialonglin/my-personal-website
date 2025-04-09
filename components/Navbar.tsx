import React from "react";
import Link from "next/link";
import "../styles/homepage.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CYBER<span className="logo-accent">FOLIO</span>
      </div>
      <ul className="nav-links">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Projects", href: "/#projects" },
          { name: "Blog", href: "/#blog" },
          { name: "Contact", href: "/#contact" },
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