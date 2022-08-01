import React from 'react';
import aboutImg from './hero-blue.png';
import { FaUser } from 'react-icons/fa';
const About = () => {
  return (
    <div>
      <div className='flex flex-row justify-center items-center w-full text-blue-500 font-semibold text-3xl my-6'>
        <FaUser size={24} />
        <p className='px-3 uppercase'>About</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='mx-12 p-6'>
          <img
            src={aboutImg}
            alt='...'
            style={{ height: '350px', aspectRatio: '2.5' }}
            className='rounded-full shadow-lg shadow-blue-300'
          ></img>
        </div>
        <div className='flex flex-col gap-6 justify-center items-start p-12'>
          <p>
            A Full stack developer with great skills in developing modern web
            apps with hands on design, develop both front end and backend
            systems using MERN stack.
          </p>
          <p>
            Has a good practice in design and prototyping of UI using
            <span className='font-semibold text-purple-500'>
              {' '}
              Figma
            </span> and{' '}
            <span className='font-semibold text-red-400'>Adobe XD</span> along
            with good knowledge and skill in using the libraries like
            <span className='font-semibold text-purple-800'> Bootstrap</span>,
            <span className='font-semibold text-cyan-500'> Tailwind</span>,
            <span className='font-semibold text-purple-400'> Ant Design</span>,
            <span className='font-semibold text-gray-500'> Material UI</span>{' '}
            and
            <span className='font-semibold text-blue-500'> React</span> for
            Front-end development.
          </p>
          <p>
            Well versed with backend technologies{' '}
            <span className='font-semibold text-green-300'>Node.js </span>and
            <span className='font-semibold text-yellow-400'> Python</span>,
            databases
            <span className='font-semibold text-green-600'> MongoDB</span>,
            <span className='font-semibold text-blue-900'> PostgreSql</span> and
            <span className='font-semibold text-blue-500'> MySQL</span>.
          </p>
          <p>
            Good at designing Scalable, Reliable and Maintainable backend
            systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
