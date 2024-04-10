import React from 'react';

const Button = ({ isFilled, onClick, children }) => {
  return (
    <button
      className={`w-40 h-8 rounded-md border-none text-xs font-semibold text-white ${isFilled ? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-100 hover:bg-pink-200'}`}
      onClick={onClick}
      disabled={!isFilled}
    >
      {children}
    </button>
  );
};

export default Button;
