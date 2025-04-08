import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 fixed w-full z-50 bg-opacity-80 bg-black backdrop-blur-md border-b border-blue-500/20">
      <div className="text-2xl font-bold text-blue-400 uppercase tracking-widest">
        CYBER<span className="text-pink-500">FOLIO</span>
      </div>
      <ul className="flex space-x-8 text-lg">
        {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-blue-400 transition duration-300 relative"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}