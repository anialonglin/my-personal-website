import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-lines"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 blur-3xl opacity-30 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-pink-500 blur-3xl opacity-30 rounded-full animate-float delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-6">
          FULL STACK DEVELOPER
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Building futuristic digital experiences with cutting-edge technologies
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}