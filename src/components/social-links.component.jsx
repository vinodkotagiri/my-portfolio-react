import React, { Fragment } from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
const SocialLinks = () => (
  <Fragment>
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 bg-gray-600 px-4 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px] hover:bg-blue-600'>
          <a
            href='https://www.linkedin.com/in/kotagiri-vinod-a10ba856'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              LinkedIn <AiOutlineLinkedin size={36} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 bg-gray-600 px-4 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px] hover:bg-slate-900'>
          <a
            href='https://github.com/vinodkotagiri'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Github <AiOutlineGithub size={36} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 bg-gray-600 px-4 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px] hover:bg-blue-900'>
          <a
            href='https://www.facebook.com/souvinu'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Facebook <AiOutlineFacebook size={36} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 bg-gray-600 px-4 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px] hover:bg-blue-400'>
          <a
            href='https://twitter.com/vinodkotagiri'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Twitter <AiOutlineTwitter size={36} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 bg-gray-600 px-4 ml-[-100px] hover:rounded-lg duration-500 hover:ml-[-10px] hover:bg-red-500'>
          <a
            href='https://www.instagram.com/vinod_kotagiri'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Instagram <AiOutlineInstagram size={36} />
            </>
          </a>
        </li>
      </ul>
    </div>
  </Fragment>
);

export default SocialLinks;
