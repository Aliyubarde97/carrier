// src/components/AdBanner.js

import  { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const AdBanner = ({ title, description, ctaText, ctaLink, imageUrl, badgeText}: any) => {
  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  // If the banner is not visible, render nothing
  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Background Image */}
          <p className='text-white'>Abudl nasir</p>
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Dismiss"
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          
          {/* Badge (Optional) */}
          {badgeText && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded-full">
              {badgeText}
              <h1>aaa</h1>
            </div>
          )}

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                {description}
              </p>
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;