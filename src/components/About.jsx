import React from 'react';
import profile_pic from '../assets/images/profile_pic.jpeg';

const About = () => {
  return (
    <div className="py-32 px-32 bg-transparent" id='about'>
      <div className="mb-12">
        <p className="text-slate-300 text-3xl font-bold">About Me</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-slate-500">
        {/* Text Section */}
        <div className="md:w-[65%] space-y-4 leading-relaxed">
          <p>
          Hello! I'm <span className="font-semibold text-slate-300">Taraka Nithin Vankala</span> from Visakhapatnam, India, also known as the city of destiny.
          </p>

          <p>
          I'm a motivated and curious individual with a keen interest in micro SaaS. I’m driven by a desire to continuously learn, explore innovative solutions, and deliver impactful results. With strong moral values, excellent communication skills, and attention to detail, I thrive in environments that challenge me to think critically and creatively.          </p>

          <p>
            I’m currently pursuing my Bachelor's in Electrical Engineering (2022–2026) from IIEST, Shibpur.
          </p>

          <p>
            I'm an active member of the <span className="font-medium text-slate-300">CodeIIEST-Official coding club of IIEST</span>
          </p>

          <div>
            <p className="font-semibold text-slate-300 mt-6">Things I love to do:</p>
            <ul className="list-disc list-inside text-[#64ffda]">
              <li>Coding</li>
              <li>Reading</li>
              <li>Playing Basketball</li>
              <li>Problem Solving</li>
              <li>Team Management</li>
              <li>Mentoring</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[30%] w-full">
          <img
            src={profile_pic}
            alt="Taraka Nithin Vankala"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
