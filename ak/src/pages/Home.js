import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url('/media/bg3.jpg')` }}>
      <h1 className="text-5xl font-bold mb-8 text-black text-center font-sans ">
        WELCOME TO THE DIGITAL PLATFORM OF <span className="inline-block text-[#FF5722] " >AK NURSING</span>
      </h1>
      <p className="text-xl text-black mb-12 text-center font-serif">
        "Empower Yourself to Make a Difference: Embark on a Fulfilling Journey Towards a Rewarding Career in Nursing with Our Comprehensive Course"
      </p>
      <Link to="/login">
      <button className="bg-[#FF5722] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl font-semibold transition duration-300 animate-bounce">
        Login Now
      </button>
      </Link>
     
    </div>
  );
};

export default Home;
