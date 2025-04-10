import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import logo from '../assets/images/logo_2.png';
import resume from '../assets/Taraka_Nithin_Vankala.pdf';

const Navbar = () => {
  return (
    <div className='flex justify-between py-7 mx-12 text-slate-300 items-center'>
      <a href="/">
      <img 
        src={logo}
        alt="Taraka Nithin Vankala" 
        className="w-16 h-auto" // Adjust the width and auto for height to keep the aspect ratio
      />
      </a>
      <div className='flex gap-10 items-center'>
        {/* Scroll to the 'About' section */}
        <Link to="about" smooth={true} duration={1000} className="cursor-pointer">
          <div>About</div>
        </Link>

        {/* Scroll to the 'Experience' section */}
        <Link to="experience" smooth={true} duration={1000} className="cursor-pointer">
          <div>Experience</div>
        </Link>

        {/* Scroll to the 'Projects' section */}
        <Link to="projects" smooth={true} duration={1000} className="cursor-pointer">
          <div>Projects</div>
        </Link>

        {/* Scroll to the 'Contact' section */}
        <Link to="contact" smooth={true} duration={1500} className="cursor-pointer">
          <div>Contact</div>
        </Link>

        <a href={resume} target='_blank' className="className='text-[#64ffda] border-[#64ffda] border-2 px-4 py-2  rounded-md hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 ease-in-out">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
