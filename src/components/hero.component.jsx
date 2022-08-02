import React from 'react';
import { MdVisibility } from 'react-icons/md';
import { HiThumbUp } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import './hero.style.css';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen'>
      <div className='mobile-container flex flex-col justify-center items-center md:hidden'>
        <div className='hero-title text-4xl'>
          <p className='flex flex-row justify-center'>I'm</p>
          <p className='flex flex-row justify-center'>A</p>
          <p className='flex flex-row justify-center'>Fullstack</p>
          <p className='flex flex-row justify-center'>Developer</p>
        </div>

        <div className='flex flex-row w-2/3 my-6 ml-10'>
          <p className='text-gray-400 font-light'>
            Expertise in building modern responsive, scalable and maintainable
            web apps
          </p>
        </div>
        <div className='flex flex-col py-3'>
          <button
            onClick={() => navigate('portfolio')}
            className='py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-blue-400 shadow-md  shadow-blue-400'
          >
            Portfolio
            <MdVisibility size={18} className='mx-3 text-blue-400' />
          </button>
          <button
            onClick={() => navigate('contact')}
            className='py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-green-400 shadow-md shadow-green-400'
          >
            Hire Me!
            <HiThumbUp size={18} className='mx-3 text-green-400' />
          </button>
        </div>
      </div>
      <div className='desktop-container w-full h-screen bg-cover hidden md:block'>
        <div className='grid grid-cols-2'>
          <div className='tech-container h-screen  bg-cover'></div>
          <div className='h-screen flex flex-col items-end mr-12 justify-start mt-40'>
            <p className='text-4xl'>I'm a Fullstack developer</p>

            <p className='text-gray-400 ml-6 font-light'>
              Expertise in building modern responsive,
            </p>
            <p className='text-gray-400 ml-6 font-light'>
              scalable and maintainable web apps
            </p>
            <div className='flex flex-row gap-12 my-12'>
              <button
                onClick={() => navigate('portfolio')}
                className='hover:scale-105 hover:text-green-800 ease-in duration-200 py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-blue-400 shadow-md  shadow-blue-400'
              >
                Portfolio
                <MdVisibility size={18} className='mx-3 text-blue-400' />
              </button>
              <button
                onClick={() => navigate('contact')}
                className=' hover:scale-105 hover:text-green-800 ease-in duration-200py-3 my-3 font-semibold flex items-center bg-gray-800 px-6 rounded-3xl text-green-400 shadow-md shadow-green-400'
              >
                Hire Me!
                <HiThumbUp size={18} className='mx-3 text-green-400' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
