import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import logo from '../assets/images/logo_2.png';
import resume from '../assets/Taraka_Nithin_Vankala.pdf';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between py-7 mx-12 text-slate-300 items-center">
      <a href="/">
        <img
          src={logo}
          alt="Taraka Nithin Vankala"
          className="w-16 h-auto" // Adjust the width and auto for height to keep the aspect ratio
        />
      </a>

      {/* Desktop and Tablet Menu */}
      <div className="hidden md:flex gap-10 items-center">
        <Link to="about" smooth={true} duration={1000} className="cursor-pointer">
          <div>About</div>
        </Link>

        <Link to="experience" smooth={true} duration={1000} className="cursor-pointer">
          <div>Experience</div>
        </Link>

        <Link to="projects" smooth={true} duration={1000} className="cursor-pointer">
          <div>Projects</div>
        </Link>

        <Link to="contact" smooth={true} duration={1500} className="cursor-pointer">
          <div>Contact</div>
        </Link>

        <a
          href={resume}
          target="_blank"
          className="text-[#64ffda] border-[#64ffda] border-2 px-4 py-2 rounded-md hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? 'X' : '☰'} {/* Show a close icon (X) or hamburger icon */}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-20 left-0 right-0 bg-slate-800 p-5 md:hidden`}
      >
        <Link to="about" smooth={true} duration={1000} className="block py-2 cursor-pointer">
          About
        </Link>

        <Link to="experience" smooth={true} duration={1000} className="block py-2 cursor-pointer">
          Experience
        </Link>

        <Link to="projects" smooth={true} duration={1000} className="block py-2 cursor-pointer">
          Projects
        </Link>

        <Link to="contact" smooth={true} duration={1500} className="block py-2 cursor-pointer">
          Contact
        </Link>

        <a
          href={resume}
          target="_blank"
          className="block py-2 text-[#64ffda] border-[#64ffda] border-2 px-4 py-2 rounded-md hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 ease-in-out"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
