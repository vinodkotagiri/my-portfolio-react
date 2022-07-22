import React from 'react';
import HeroImage from '../assets/hero-img.png';
import { AiOutlineRight, AiOutlineArrowRight } from 'react-icons/ai';
const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have an experience in building and designing fullstack apps. I
            love to work on web application projects using MERN stack along with
            GraphQL, Tailwind and BootStrap.
          </p>

          <div className='flex flex-row space-x-6'>
            <div>
              <button className='group text-white w-fit px-6 py-3 my-2 flex font-semibold items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                Portfolio
                <span className='group-hover:rotate-90 duration-300 ml-1'>
                  <AiOutlineRight size={18} />
                </span>
              </button>
            </div>
            <div>
              <button className='group text-white w-fit px-6 py-3 my-2 flex font-semibold items-center rounded-md  cursor-pointer hover:border-b border-green-200'>
                Contact Me
                <span className='group-hover:rotate-90 duration-300 ml-1'>
                  <AiOutlineArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt='hero-profile'
            className='rounded-2xl w-2/3 md:w-full '
            style={{ width: '16.5rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
