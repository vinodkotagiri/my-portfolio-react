import React from 'react';
import { MdVisibility } from 'react-icons/md';
import { HiThumbUp } from 'react-icons/hi';
const Hero = () => {
  return (
    <div className='mobile-container flex flex-col justify-center items-center'>
      <div className='hero-title text-4xl'>
        <p className='flex flex-row justify-center'>I'm</p>
        <p className='flex flex-row justify-center'>A</p>
        <p className='flex flex-row justify-center'>Fullstack</p>
        <p className='flex flex-row justify-center'>Developer</p>
      </div>

      <div className='flex flex-row w-2/3 my-6 ml-10'>
        <p className='text-gray-400 font-light'>
          Expertise in building modern responsive, scalable and maintainable web
          apps
        </p>
      </div>

      <div className='flex flex-col py-3'>
        <button className='py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-blue-400 shadow-md  shadow-blue-400'>
          Portfolio
          <MdVisibility size={18} className='mx-3 text-blue-400' />
        </button>
        <button className='py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-green-400 shadow-md shadow-green-400'>
          Hire Me!
          <HiThumbUp size={18} className='mx-3 text-green-400' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
