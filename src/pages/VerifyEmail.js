import React from 'react';
import MainNavBar from '../components/MainNavBar'; // Import the MainNavBar component
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai';
import VerifyEmailFooter from '../components/VerifyEmailFooter';

const VerifyEmail = () => {
  return (
    <div>
      <MainNavBar />
      <div className="flex flex-col justify-center items-center p-5 mb-16">
        <h1 className="text-4xl font-bold text-black-500 mt-8">Please verify your email...</h1> {/* Heading */}
        <div className="relative mt-4">
          <AiOutlineMail className="text-gray-500 text-8xl z-10" /> {/* Mail icon with higher z-index */}
          <div className="absolute top-0 right-0 bg-white rounded-full">
            <AiOutlineCheckCircle className="text-pink-500 text-4xl" /> {/* Envelope-check icon */}
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-lg text-gray-600 mb-3">Please verify your email address. We've sent a confirmation email to:</p>
          <p className="text-lg font-bold mb-3">example@example.com</p> {/* Replace with the actual email address */}
          <p className="text-lg text-gray-600 mb-3">Click the confirmation link in that email to begin using Dribbble.</p> {/* Additional paragraph */}
          <p className="text-lg text-gray-600 mb-3">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#" className="text-pink-500">resend the confirmation email.</a></p> {/* Second additional paragraph with link */}
          <p className="text-lg text-gray-600">Wrong email address? <a href="#" className="text-pink-500">Change it.</a></p> {/* Third additional paragraph with link */}
        </div>
      </div>
      <VerifyEmailFooter/>
    </div>
  );
};

export default VerifyEmail;
