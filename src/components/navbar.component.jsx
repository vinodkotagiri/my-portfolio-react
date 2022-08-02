import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [flag, setFlag] = useState('hidden');
  const navigate = useNavigate();
  const toggleMenu = () => {
    setToggleBtn(!toggleBtn);
    setFlag(flag === 'hidden' ? '' : 'hidden');
  };

  return (
    <nav className='p-5 bg-black md:flex md:items-center md:justify-between sticky top-0 z-30'>
      <div className='flex flex-row justify-between'>
        <div
          onClick={() => navigate('/')}
          className='font-signature text-gray-300 text-3xl cursor-pointer'
        >
          Vinod Kotagiri
        </div>
        {!toggleBtn ? (
          <FaBars
            size={32}
            className='text-gray-300 md:hidden cursor-pointer mr-8'
            onClick={() => toggleMenu()}
          />
        ) : (
          <FaTimes
            size={32}
            className='text-gray-300 md:hidden cursor-pointer mr-8'
            onClick={() => toggleMenu()}
          />
        )}
      </div>
      <ul
        className={`bg-gray-900 md:bg-black text-right md:flex md:items-center md:z-auto md:static absolute w-full px-10 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${flag} transition-all ease-in duration-200`}
      >
        <li className='py-3'>
          <NavLink
            to='/'
            className=' mx-4 my-6 md:my-0 md:py-6 text-xl font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
            onClick={() => toggleMenu()}
          >
            home
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/about'
            className='mx-4 my-6 md:my-0 text-xl font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
            onClick={() => toggleMenu()}
          >
            about
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/skills'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
            onClick={() => toggleMenu()}
          >
            skills
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/portfolio'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
            onClick={() => toggleMenu()}
          >
            portfolio
          </NavLink>
        </li>
        <li className='py-3'>
          <NavLink
            to='/contact'
            className='mx-4 my-6 md:my-0 text-xl md:py-6 font-thin text-gray-300 uppercase hover:text-blue-400 duration-500'
            onClick={() => toggleMenu()}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
