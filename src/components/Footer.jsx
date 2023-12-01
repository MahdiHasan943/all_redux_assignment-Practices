// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out mr-4"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out mr-4"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
          >
            Instagram
          </a>
        </div>
        <p className="text-center">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
