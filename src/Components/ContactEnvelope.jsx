import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons

const ContactEnvelope = () => {
  return (
    <div className="w-5/6 lg:w-4/6 gap-4 mx-auto py-10 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-black text-white flex justify-center items-center rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold">Let's Connect</h1>
      </div>

      {/* Linktree-like List with Icons */}
      <div className="lg:w-2/6 w-full bg-white p-8 flex flex-col justify-center items-center border-4 border-black rounded-lg">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mb-4 text-center flex items-center justify-center space-x-3"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
          <span>LinkedIn</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:example@gmail.com"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mb-4 text-center flex items-center justify-center space-x-3"
        >
          <FontAwesomeIcon icon={faGoogle} className="text-white text-xl" />
          <span>Gmail</span>
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@your-medium-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mb-4 text-center flex items-center justify-center space-x-3"
        >
          <FontAwesomeIcon icon={faMedium} className="text-white text-xl" />
          <span>Medium</span>
        </a>
        <a
          href='https://www.github.com/Wanderer0074348'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mb-4 text-center flex items-center justify-center space-x-3'
        >
          <FontAwesomeIcon icon={faGithub} className='text-white text-xl' />
          <span>GitHub</span> 
        </a>
      </div>
    </div>
  );
};

export default ContactEnvelope;