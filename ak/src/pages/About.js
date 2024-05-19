
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-300 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-8 text-white text-center">
        WELCOME TO THE DIGITAL PLATFORM OF{" "}
        <span className="text-yellow-500 animated-heading" >AK NURSING</span>.
      </h1>
      <p className="text-xl text-white mb-12 text-center">
        "Empower Yourself to Make a Difference: Embark on a Fulfilling Journey Towards a Rewarding Career in Nursing with Our Comprehensive Course"
      </p>
      <button className="bg-[#FF5722] text-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl font-semibold transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default About;
