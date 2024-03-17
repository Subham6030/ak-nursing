// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/media/bg3.jpg')` }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-semibold text-2xl font-custum">
              AK NURSING
            </Link>
            <img src="../media/logo1.png" alt="kuch bhi" className="w-8 h-8 "/>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6 fill-black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v1H3V5zm0 6h18v1H3v-1zm0 6h18v1H3v-1z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              onClick={() => setIsOpen(false)}
            >
              <Link
                to="/"
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
