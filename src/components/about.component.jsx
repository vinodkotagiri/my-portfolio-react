import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
const About = () => (
  <div className='about bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center items-center w-full h-full'>
      <div className='flex flex-row space-x-6'>
        <FaUserAlt size={30} />
        <h2 className='text-3xl font-semibold'>About</h2>
      </div>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et aperiam
      nam sed magnam dicta nostrum ad? Accusamus ipsa, laboriosam nam aspernatur
      rem alias. Doloribus, reiciendis aliquam provident inventore maiores
      similique nulla deserunt ducimus? Provident et tempora fugiat, ad, ipsa
      earum aspernatur illo, nam vero quas expedita sed vitae odit!
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam
      excepturi nesciunt quis possimus commodi repellat cum provident magni rem,
      culpa quia porro iusto minus voluptates dignissimos recusandae pariatur,
      esse accusantium minima ut nisi, exercitationem necessitatibus? Alias
      velit, ipsa consequuntur praesentium architecto consectetur! Vero rerum
      fuga sint dolorem qui. Necessitatibus.
    </p>
  </div>
);

export default About;
