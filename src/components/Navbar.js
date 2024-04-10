import React from 'react';
import BackButton from './BackButton';
import DribbbleLogo from '../assets/images/dribble-logo.png';

const NavBar = () => {
  return (
    <nav className="bg-white flex items-center justify-between p-4 pt-0">
      <div className="flex items-center space-x-4 p-4">
        <img src={DribbbleLogo} alt="Logo" className="h-[20px] w-[75px]" />
        <BackButton/>
      </div>
    </nav>
  );
};

export default NavBar;
