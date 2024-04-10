import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Button from '../components/Button';
import Dropdown from '../components/DropDown';
import UploadIcon from '../assets/images/UploadIcon.svg';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/Image2.jpg';
import image3 from '../assets/images/Image3.jpg';
import image4 from '../assets/images/Image4.jpg';
import image5 from '../assets/images/Image5.jpg';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const images = [image1, image2, image3, image4, image5];
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContainerClick = (e) => {
    e.preventDefault();
    document.getElementById('avatarInput').click();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClick = (imageUrl) => {
    setAvatarImage(imageUrl);
    setShowDropdown(false);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    checkIsFilled();
  };

  const checkIsFilled = () => {
    if (avatarImage && location) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const handleButtonClick = () => {
    if (isFilled) {
      navigate('/select-purpose');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-black mb-4">Welcome! Let's create your profile</h1>
            <p className="text-sm text-gray-500 mb-6">Let others get to know you better! You can do these later</p>
            <h2 className="text-xl font-bold text-black mb-5">Add an avatar</h2>
            <div className="flex items-center md:items-start mb-1">
              <div className="h-40 w-40 flex items-center md:items-start">
                <label
                  htmlFor="avatarInput"
                  className="rounded-full border-2 border-dashed border-gray-400 h-[120px] w-[120px] md:h-[135px] md:w-[135px] flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={handleContainerClick}
                >
                  {avatarImage ? (
                    <img src={avatarImage} alt="Avatar" className="h-full w-full object-cover" />
                  ) : (
                    <img src={UploadIcon} alt="Upload Icon" className="h-6 w-6" />
                  )}
                </label>
                <input
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
    
              </div>

              <div className="relative">
                {/* Choose button element Start*/}

                <div class="mb-3">
                  <button
                    className="text-sm text-black border border-gray-400 rounded-xl px-2 py-1 hover:bg-gray-200"
                    onClick={handleContainerClick}
                  >
                    Choose Image
                  </button>
                </div>

                {/* Choose button element end*/}

                {/* Drop Down Section Start*/}
                <div className="hidden md:block">
                  <Dropdown
                    showDropdown={showDropdown}
                    toggleDropdown={toggleDropdown}
                    handleDropdownClick={handleDropdownClick}
                    images={images}
                  />
                </div>
                {/* Drop Down Section End*/}
              </div>
            </div>
            <div className="md:hidden relative mb-24">
              <Dropdown
                showDropdown={showDropdown}
                toggleDropdown={toggleDropdown}
                handleDropdownClick={handleDropdownClick}
                images={images}
              />
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black mb-2">Add your location</h2>
              <input
                type="text"
                placeholder="Enter a location"
                value={location}
                onChange={handleLocationChange}
                className="w-full border-b border-gray-400 bg-white focus:outline-none py-2 px-4"
              />
            </div>
            <Button isFilled={isFilled} onClick={handleButtonClick}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
