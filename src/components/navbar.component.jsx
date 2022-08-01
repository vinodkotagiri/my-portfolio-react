import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const toggleMenu = () => {
    setToggleBtn(!toggleBtn);
    opacity === 1 ? setOpacity(0) : setOpacity(1);
  };

  return (
    <nav className='p-5 bg-transparent md:flex md:items-center md:justify-between'>
      <div className='flex flex-row justify-between'>
        <div className='font-signature text-gray-300 text-3xl cursor-pointer'>
          Vinod Kotagiri
        </div>
        {!toggleBtn ? (
          <FaBars
            size={32}
            className='text-white md:hidden cursor-pointer'
            onClick={() => toggleMenu()}
          />
        ) : (
          <FaTimes
            size={32}
            className='text-white md:hidden cursor-pointer'
            onClick={() => toggleMenu()}
          />
        )}
      </div>
      <ul
        className={`text-right md:flex md:items-center md:z-auto md:static absolute w-full px-10 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-${opacity} transition-all ease-in duration-200`}
      >
        <li className='py-3'>
          <a
            href='!#'
            className=' mx-4 my-6 md:my-0 md:py-6 text-xl font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
          >
            home
          </a>
        </li>
        <li className='py-3'>
          <a
            href='!#'
            className='mx-4 my-6 md:my-0 text-xl font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
          >
            about
          </a>
        </li>
        <li className='py-3'>
          <a
            href='!#'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
          >
            skills
          </a>
        </li>
        <li className='py-3'>
          <a
            href='!#'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
          >
            portfolio
          </a>
        </li>
        <li className='py-3'>
          <a
            href='!#'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
