import React, { useState } from 'react';
import DribbbleLogo from '../assets/images/dribble-logo.png';
import { FaSearch } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import defaultAvatar from '../assets/images/Image1.jpg'; // Import the default avatar image

const MainNavBar = () => {
  const [avatarImage, setAvatarImage] = useState(defaultAvatar); // Initialize with default avatar image URL
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  // Handle button click
  const handleButtonClick = () => {
    // Add your button click logic here
  };

  return (
    <>
    <nav className="bg-white flex items-center justify-between p-4 pb-3 pt-2 border-b border-gray-100">
      {/* Left side */}
      <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              {/* Hamburger Icon */}
              <button onClick={toggleMenu} className="text-gray-400 focus:outline-none focus:text-gray-800">
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
            {/* Logo */}
              <div className="md:block">
                <img src={DribbbleLogo} alt="Logo" className="h-[20px] w-[75px]" />
              </div>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-gray-800">
              Inspiration
            </a>
            <a href="#" className="hover:text-gray-800">
              Find Work
            </a>
            <a href="#" className="hover:text-gray-800">
              Learn Design
            </a>
            <a href="#" className="hover:text-gray-800">
              Go Pro
            </a>
            <a href="#" className="hover:text-gray-800">
              Hire Designers
            </a>
          </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4 text-pink-500">

        {/* Other elements */}
        <div className="relative">
          {/* Search bar */}
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search"
              className={`w-8 md:w-24 h-8 rounded-md border-none pl-8 bg-gray-100 ${expanded ? 'w-24' : 'w-8'}`}
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>
        {/* Briefcase icon */}
        <MdWork className="hidden md:block text-gray-400 cursor-pointer" />
        {/* Uploaded picture */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        {/* Custom button */}
        <button className="hidden md:block w-24 h-8 rounded-md border-none text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600" onClick={handleButtonClick}>
          Upload
        </button>
      </div>
    </nav>
    {/* Menu Content */}
    {isOpen && (
      <div className="bg-gray-100 w-full p-4">
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="hover:text-gray-800">
            Inspiration
          </a>
          <a href="#" className="hover:text-gray-800">
            Find Work
          </a>
          <a href="#" className="hover:text-gray-800">
            Learn Design
          </a>
          <a href="#" className="hover:text-gray-800">
            Go Pro
          </a>
          <a href="#" className="hover:text-gray-800">
            Hire Designers
          </a>
        </div>
      </div>
    )}
</>
    
  );
};

export default MainNavBar;
