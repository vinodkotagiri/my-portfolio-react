import React, { Fragment, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [navToggled, setNavToggled] = useState(false);
  return (
    <Fragment>
      <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
        <div>
          <h1 className='p-1 text-5xl ml-2 font-signature text-white'>
            Vinod Kotagiri
          </h1>
        </div>
        <ul className='hidden md:flex '>
          <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 hover:text-orange-500'>
            home
          </li>
          <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 hover:text-orange-500 '>
            about
          </li>
          <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 hover:text-orange-500 '>
            portfoilo
          </li>
          <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 hover:text-orange-500 '>
            skills
          </li>
          <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 hover:text-orange-500 '>
            contact
          </li>
        </ul>
        <div
          onClick={() => setNavToggled(!navToggled)}
          className='cursor-pointer pr-4 md:hidden z-10'
        >
          {navToggled ? <FaTimes size={48} /> : <FaBars size={48} />}
        </div>
        {navToggled && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-600'>
            <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 text-gray-500 py-6 text-4xl'>
              home
            </li>
            <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 text-gray-500 py-6 text-4xl'>
              about
            </li>
            <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 text-gray-500 py-6 text-4xl'>
              portfoilo
            </li>
            <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 text-gray-500 py-6 text-4xl'>
              skills
            </li>
            <li className='px-4 uppercase cursor-pointer hover:scale-110 duration-300 text-gray-500 py-6 text-4xl'>
              contact
            </li>
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
