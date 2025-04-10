import React from 'react';
import car_img from '../assets/images/car_image_1.jpg';
import email_img from '../assets/images/email_img.png';
import face_recog_img from '../assets/images/face_recog_img.png';

const Projects = () => {
  return (
    <div className="py-32 px-10 lg:px-32" id='projects'>
      <div className="text-slate-300 font-bold text-3xl mb-12">My Projects</div>

      {/* Car Bidding Website Project */}
      <div className="flex flex-col md:flex-row gap-12 mb-20 text-slate-500">
        {/* Left Column - Image */}
        <div className="md:w-1/2">
          <img
            src={car_img}
            alt="Car Bidding Website"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-slate-300 text-xl font-semibold">Car Bidding Website | React, Tailwind CSS, JavaScript</h3>
          <ul className="list-disc list-inside">
            <li>
              Collaborated in a team to develop the frontend of a Car Bidding Website using React and Tailwind CSS.
            </li>
            <li>
              Designed and implemented a fully responsive user interface with optimized layouts for mobile and desktop views.
            </li>
            <li>
              Ensured seamless user experience by integrating dynamic components and handling state management effectively.
            </li>
          </ul>
          <div className='flex flex-col'>
            <a href="https://temp-frontend-seven.vercel.app/" target='_blank' className='font-bold underline text-[#64ffda]'>Live link</a>
          </div>
        </div>
      </div>

      {/* Custom Email Sender Project */}
      <div className="flex flex-col md:flex-row gap-12 mb-20 text-slate-500">
        {/* Left Column - Image */}
        <div className="md:w-1/2">
          <img
            src={email_img}
            alt="Custom Email Sender"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-slate-300 text-xl font-semibold">Custom Email Sender | HTML, CSS, JavaScript, FastAPI, NLP</h3>
          <ul className="list-disc list-inside">
            <li>
              Built a web-based email sender enabling users to upload CSV files, generate personalized messages using an LLM, and automate email distribution.
            </li>
            <li>
              Implemented a FastAPI-powered backend to facilitate smooth processing and efficient email dispatch.
            </li>
            <li>
              Integrated free APIs like Groq for AI-driven content generation and SendGrid for reliable email delivery.
            </li>
            <li>
              Crafted a user-friendly front-end interface using HTML, CSS, and JavaScript for seamless interaction.
            </li>
          </ul>
          <a href="https://github.com/nithinv-27/email_sender" target='_blank' className='font-bold underline text-[#64ffda]'>Github link</a>
        </div>
      </div>

      {/* Emotion and Facial Recognition Project */}
      <div className="flex flex-col md:flex-row gap-12 mb-20 text-slate-500">
        {/* Left Column - Image */}
        <div className="md:w-1/2">
          <img
            src={face_recog_img}
            alt="Emotion and Facial Recognition"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-slate-300 text-xl font-semibold">Emotion and Facial Recognition in Real-time | Deep Learning, Computer Vision</h3>
          <ul className="list-disc list-inside">
            <li>
              Created a real-time facial recognition system using Python, leveraging OpenCV for face detection and video stream analysis.
            </li>
            <li>
              Utilized VGG-16 for feature extraction and a custom CNN in Keras for precise emotion classification.
            </li>
            <li>
              Enhanced performance by incorporating ResNet and accelerating training with PyTorch, improving accuracy and efficiency.
            </li>
            <li>
              Delivered an optimized facial recognition and emotion detection solution with significant advancements in precision and real-time processing.
            </li>
          </ul>
          <a href="https://github.com/nithinv-27/Emotion-and-Facial-Recognition-in-Real-Time" target='_blank' className='font-bold underline text-[#64ffda]'>Github link</a>
        </div>
      </div>
      <div className='mx-auto w-full my-5 text-center'>
      <a href='https://github.com/nithinv-27?tab=repositories' target='_blank' className="text-[#64ffda] border-[#64ffda] border-2 p-4 rounded-md hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 ease-in-out">
       Show More
      </a>


      </div>
    </div>
  );
};

export default Projects;
