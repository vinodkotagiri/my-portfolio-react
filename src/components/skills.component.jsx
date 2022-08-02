import React from 'react';
import { FaCogs } from 'react-icons/fa';
import htmlLogo from '../assets/images/html-5-logo-svgrepo-com.svg';
import cssLogo from '../assets/images/css3-svgrepo-com.svg';
import jsLogo from '../assets/images/js-svgrepo-com.svg';
import reactLogo from '../assets/images/react-svgrepo-com.svg';
import reduxLogo from '../assets/images/redux-svgrepo-com.svg';
import nodeLogo from '../assets/images/node-svgrepo-com.svg';
import pythonLogo from '../assets/images/python-svgrepo-com.svg';
import graphLogo from '../assets/images/graphql-svgrepo-com.svg';
import bootstrapLogo from '../assets/images/bootstrap-svgrepo-com.svg';
import tailwindLogo from '../assets/images/tailwind-svgrepo-com.svg';
import sqlLogo from '../assets/images/mysql-svgrepo-com.svg';
import mongoLogo from '../assets/images/mongodb-svgrepo-com.svg';
import gitLogo from '../assets/images/git-svgrepo-com.svg';
import awsLogo from '../assets/images/aws-svgrepo-com.svg';
const Skills = () => {
  return (
    <div>
      <div className='flex flex-row justify-center items-center w-full text-blue-500 font-semibold text-3xl my-6'>
        <FaCogs size={24} />
        <p className='px-3 uppercase'>Skills</p>
      </div>
      <div className='grid grid-cols-5 gap-y-8'>
        <div className='flex flex-col justify-center items-center '>
          <img
            src={htmlLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-orange-600 rounded-3xl p-3'
          />
          <p className='my-3'>HTML</p>
        </div>

        <div className='flex flex-col justify-center items-center '>
          <img
            src={cssLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-blue-600 rounded-3xl p-3'
          />
          <p className='my-3'>CSS</p>
        </div>

        <div className='flex flex-col justify-center items-center '>
          <img
            src={jsLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-yellow-600 rounded-3xl p-3'
          />
          <p className='my-3'>JavaScript</p>
        </div>

        <div className='flex flex-col justify-center items-center '>
          <img
            src={reactLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-blue-400 rounded-3xl p-3'
          />
          <p className='my-3'>React</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={reduxLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-purple-600 rounded-3xl '
          />
          <p className='my-3'>Redux</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={bootstrapLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-purple-600 rounded-3xl '
          />
          <p className='my-3'>Bootstrap</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={tailwindLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-purple-600 rounded-3xl '
          />
          <p className='my-3'>Tailwind</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={nodeLogo}
            alt='node_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-green-300 rounded-3xl '
          />
          <p className='my-3'>NodeJs</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={pythonLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-yellow-300 rounded-3xl '
          />
          <p className='my-3'>Python</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={graphLogo}
            alt='html_Logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-pink-600 rounded-3xl '
          />
          <p className='my-3'>GraphQL</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={sqlLogo}
            alt='sql_logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-blue-500 rounded-3xl '
          />
          <p className='my-3'>MySQL</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={mongoLogo}
            alt='mongo_logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-green-500 rounded-3xl '
          />
          <p className='my-3'>MongoDB</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            src={gitLogo}
            alt='git_logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-red-400 rounded-3xl '
          />
          <p className='my-3'>GIT</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img
            src={awsLogo}
            alt='sql_logo'
            style={{ width: '6rem' }}
            className='shadow-lg shadow-orange-400 rounded-3xl '
          />
          <p className='my-3'>AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
