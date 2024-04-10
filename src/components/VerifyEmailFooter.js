import React from 'react';
import DribbbleLogo from '../assets/images/dribble-logo.png';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaBasketballBall, FaCopyright } from 'react-icons/fa';

const VerifyEmailFooter = () => {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/6">
          {/* Column 1 content */}
          <div className="flex flex-col items-center md:items-start mb-5">
            <img src={DribbbleLogo} className="h-[25px] w-[90px] mb-5" />
            <p className="text-gray-800 text-sm mb-5">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
            <div className="flex items-center mt-2">
              <FaBasketballBall className="text-gray-700 mr-4 text-lg" />
              <FaTwitter className="text-gray-700 mr-4 text-lg" />
              <FaFacebook className="text-gray-700 mr-4 text-lg" />
              <FaInstagram className="text-gray-700 mr-4 text-lg" />
              <FaPinterest className="text-gray-700 mr-4 text-lg" />
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/6 mb-3">
          {/* Column 2 content */}
          
          <h2 className="text-sm font-semibold text-left mb-2">For designers</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Go Pro!</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Explore design work</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design blog</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Overtime podcast</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Playoffs</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Weekly Warm-UP</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Refer a Friend</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Code of conduct</a></li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/6 mb-3">
          {/* Column 3 content */}
          <h2 className="text-sm font-semibold mb-2">Hire designers</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Post a job opening</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Post a freelance project</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-4">Search for designers</a></li>
          </ul>
          <h2 className="text-sm font-semibold mb-2">Brands</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Advertise with us</a></li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/6 mb-3">
          {/* Column 4 content */}
          <h2 className="text-sm font-semibold mb-2">Company</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">About</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Careers</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Support</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Media kit</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Testimonials</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">API</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Terms of service</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Privacy policy</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Cookie policy</a></li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/6 mb-3">
          {/* Column 5 content */}
          <h2 className="text-sm font-semibold mb-2">Directories</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design jobs</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Designers for hire</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Freelance designers for hire</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Tags</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-4">Places</a></li>
          </ul>
          <h2 className="text-sm font-semibold mb-2">Design assets</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Dribbble Marketplace</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Creative Market</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Fontspring</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Font Squirrel</a></li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/6 mb-3">
          {/* Column 6 content */}
          <h2 className="text-sm font-semibold mb-2">Design Resources</h2>
          <ul className="list-none">
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Freelancing</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design Hiring</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design Portfolio</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design Education</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Creative Process</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design Industry</a></li>
            <li><a href="#" className="text-gray-700 text-sm block mb-3">Design Industry Trends</a></li>
          </ul>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="my-6 border-gray-400" />
      <div className="flex items-center justify-between text-gray-700">
        <div className="flex items-center">
          <FaCopyright className="mr-2" />
          <span className="text-sm">2024 Dribbble. All rights reserved</span>
        </div>
        <div className="flex items-center">
          <p><span className="text-sm mr-2 font-bold">20,501,853</span>shots dribbbled</p>
          <FaBasketballBall className="ml-2 text-lg text-pink-500" />
        </div>
      </div>
    </footer>
  );
};

export default VerifyEmailFooter;
