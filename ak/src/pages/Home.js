// LandingPage.js

import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-8 text-white text-center">Welcome to Our Website</h1>
      <p className="text-xl text-white mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl font-semibold transition duration-300">Get Started</button>
    </div>
  );
};

export default Home;
