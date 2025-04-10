import React from "react";
import Link from "next/link";
import "../app/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CYBER<span className="logo-accent">FOLIO</span>
      </div>
      <ul className="nav-links">
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