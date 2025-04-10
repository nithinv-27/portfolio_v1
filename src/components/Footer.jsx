import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing social icons from React Icons

const Footer = () => {
  return (
    <div className="py-12 bg-gray-900 text-center text-slate-300">
      {/* Social Media Icons Section */}
      <div className="flex justify-center gap-8">
        {/* Email Icon */}
        <a href="mailto:nithintaraka.v@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="w-8 h-8 text-[#64ffda] hover:text-[#3c9dd0] transition-all duration-300" />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/taraka-nithin-vankala/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 text-[#64ffda] hover:text-[#0077b5] transition-all duration-300" />
        </a>

        {/* Twitter Icon */}
        <a href="https://x.com/nithinv_27" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-8 h-8 text-[#64ffda] hover:text-[#1da1f2] transition-all duration-300" />
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/nithinv-27" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 text-[#64ffda] hover:text-[#333] transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
