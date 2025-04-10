import React from 'react';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <>
      <div className="py-52 px-10 lg:px-32 flex justify-center items-center" id='contact'>
        {/* Main Container */}
        <div className="text-center text-slate-300 space-y-8">
          {/* Heading Section */}
          <div className="font-bold text-4xl text-slate-200">Get in Touch</div>

          {/* Mail Me Button */}
          <div>
          <a href="mailto:nithintaraka.v@gmail.com" className='text-[#64ffda] border-[#64ffda] border-2 p-4 rounded-md hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 ease-in-out'>
              Mail Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
