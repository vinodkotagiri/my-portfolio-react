import React from 'react';
import { AiFillProfile } from 'react-icons/ai';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { data } from './portfolio.js';
import './portfolio.styles.css';
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='flex flex-row justify-center items-center w-full text-blue-500 font-semibold text-3xl my-6'>
        <AiFillProfile size={28} />
        <p className='px-3 uppercase'>Portfolio</p>
      </div>

      <div className='flex justify-center items-center gap-4 p-6'>
        {data.map((d) => (
          <div className='max-w-xs  rounded-3xl overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src={require(`${d.cover}`)}
              alt='e-commerce'
            />
            <div class='px-6 py-4 bg-slate-200'>
              <div class='font-bold text-xl mb-1 text-gray-800'>{d.title}</div>
              <p class='text-gray-500 text-base'>{d.description}</p>
              <button className='btn btn-code'>
                Code&nbsp;
                <BsFileEarmarkCodeFill />
              </button>
              <button className='btn btn-demo'>
                Demo&nbsp;
                <FaGlobe />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
