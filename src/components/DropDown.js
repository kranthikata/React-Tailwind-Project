import React from 'react';

const Dropdown = ({ showDropdown, toggleDropdown, handleDropdownClick, images }) => {
  return (
    <div>
      <button
        className="text-sm text-gray-400 rounded-lg px-2 py-1"
        onClick={toggleDropdown}
      >
        {showDropdown ? (
          <span className="flex items-center">
            <span className="">
              <svg className="h-4 w-4 text-gray-400 transform rotate-270" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 12l6 6 6-6"/>
              </svg>
            </span> Or choose one of our defaults
          </span>
        ) : (
          <span className="flex items-center">
            <span className="">
              <svg className="h-4 w-4 text-gray-400 transform rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/>
              </svg>
            </span> Or choose one of our defaults
          </span>
        )}
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 flex bg-transparent rounded-lg p-2">
          {/* Dropdown options */}
          {images.map((image, index) => (
            <img key={index} src={image} alt={`profile${index + 1}`} className="w-[45px] h-[45px] rounded-full m-1 cursor-pointer" onClick={() => handleDropdownClick(image)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
