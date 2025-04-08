import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation Menu */}
      <nav className="flex items-center justify-between px-8 py-4 bg-opacity-90 bg-gray-800 shadow-lg">
        <div className="text-3xl font-extrabold tracking-widest text-blue-400">
          My Portfolio
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-blue-400 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-blue-400 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore my projects, blog, and more!
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View Projects
          </a>
        </div>
      </main>
    </div>
  );
}