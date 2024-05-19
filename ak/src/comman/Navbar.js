import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu after clicking on a link
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolling ? "bg-orange-400" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Link to="#" className="font-bold text-3xl text-black">
              AK NURSING
            </Link>
            <img src="../media/logo.png" alt="kuch bhi" className="w-10 h-10 mt-2 " />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold underline decoration-orange-400	decoration-solid 	"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold underline decoration-orange-400 decoration-solid"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold underline decoration-orange-400	decoration-solid"
            >
              About
            </button>
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
              <button
                onClick={() => scrollToSection("home")}
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-semibold"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:bg-gray-700 hover:text-white text-gray-800 block px-3 py-2 rounded-md text-base font-semibold"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
