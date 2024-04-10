import React, { useEffect, useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import SignUpImage from "../assets/images/SignUpImage.jpg"

const SignUpPage = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerHeight > window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {isWideScreen ? (
        <div className="flex-1">
          <SignUpForm />
        </div>
      ) : (
        <>
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
              src={SignUpImage}
              alt="Left Section"
              className="md:h-screen object-cover w-full"
            />
          </div>
          <div className="flex-1">
            <SignUpForm />
          </div>
        </>
      )}
    </div>
  );
};

export default SignUpPage;
