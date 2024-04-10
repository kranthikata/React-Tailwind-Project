import React, { useState } from 'react';

const PurposeCard = ({ id, title, description, image, onChange, isChecked }) => {
  return (
    <div className="w-full mx-2 my-4 bg-white border rounded-lg p-4 relative flex flex-col">
      <div>
        <img src={image} alt={title} className="w-40 h-40 mb-3 object-cover mx-auto" />
        <h2 className="text-sm font-bold mb-2 text-center">{title}</h2>
        {isChecked && <p className="text-xs text-gray-700 mb-4">{description}</p>}
      </div>
      <div className="mt-auto flex items-center justify-center">
        <label
          htmlFor={id}
          className="inline-block rounded-full border-2 w-6 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id={id}
            className="hidden"
            checked={isChecked}
            onChange={() => onChange(id)} // Call onChange handler with card ID
          />
          <span
            className={`block w-full h-full rounded-full border-1 ${
              isChecked ? 'bg-pink-500' : 'bg-white'
            } flex items-center justify-center`}
          >
            {isChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5l10 -10" />
              </svg>
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default PurposeCard;
