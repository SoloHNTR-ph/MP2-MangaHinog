import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./ui/SearchBar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-between items-center shadow-sm p-5">
      <Link to="/">
        <img src="/manga.svg" width={350} height={150} alt="Logo" />
      </Link>

      {/* Hamburger Icon for All Screens */}
      <div className="block">
        <button
          onClick={toggleMenu}
          className="absolute top-12 left-10 text-black-600 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Full-Screen Navigation Menu */}
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } top-10 left-8 right-0 w-[200px] h-[200px] bg-white z-0 flex flex-col justify-start items-start gap-10`}
      >
        <button
          onClick={toggleMenu}
          className="left top-5 right-5 text-black-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-5">
          <li className="text-xl font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary-color">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="text-xl font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary-color">
            <Link to="/browse" onClick={toggleMenu}>
              Browse
            </Link>
          </li>
          <li className="text-xl font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary-color">
            <Link to="/latest" onClick={toggleMenu}>
              Latest Update
            </Link>
          </li>
        </ul>
      </div>
      <SearchBar/>
    </div>
  );
};
