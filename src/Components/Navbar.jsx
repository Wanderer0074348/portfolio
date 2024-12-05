import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import sun and moon icons for dark/light mode

const Navbar = ({ navOpacity }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");

    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Toggle navbar visibility
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full flex items-center justify-center p-4 z-50 transition-opacity duration-1000 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-[85%]"
        } transform transition-transform duration-500 bg-opacity-100`} // Translucent background
        style={{ opacity: navOpacity }}
      >
        <div className="border-4 border-black text-black rounded-lg p-8 w-full lg:w-5/6 flex items-center justify-between relative bg-white dark:bg-black dark:border-white">
          {/* Left Section: Dark Mode Toggle */}
          <div className="flex space-x-4">
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="focus:outline-none">
              <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className="text-black dark:text-white text-2xl"
              />
            </button>
          </div>

          {/* Center Section: Name (Centered relative to parent, not icons) */}
          <h1 className="text-2xl md:text-4xl font-extrabold absolute left-1/2 transform -translate-x-1/2 dark:text-white">
            Tanay Matta
          </h1>

          {/* Right Section: Navigation Links (Hidden on small screens) */}
          <div className="hidden lg:flex space-x-8">
            <a
              href="#about"
              className="text-black dark:text-white text-lg hover:text-gray-800 hover:-transform-y-110 hover:scale-105"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-black dark:text-white text-lg hover:text-gray-800 hover:-transform-y-110 hover:scale-105"
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      {/* Navbar Toggle Button (Always visible at the top) */}
      {!isNavbarVisible && (
        <button
          onClick={toggleNavbar}
          className="fixed top-0 left-[50%] transform -translate-x-[50%] z-[60] bg-black text-white p-2 rounded-b-lg focus:outline-none"
        >
          Show Navbar
        </button>
      )}
    </>
  );
};

export default Navbar;