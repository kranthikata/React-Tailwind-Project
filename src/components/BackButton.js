import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page in the history stack
  };

  return (
    <div className="bg-gray-100 rounded-lg p-2" onClick={handleBack}>
      <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/>
      </svg>
    </div>
  );
};

export default BackButton;
