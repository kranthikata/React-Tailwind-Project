import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const SignUpForm = () => {
  const [formData, setFormData] = useState(() => {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      termsChecked: false,
    };
  });


  const [errors, setErrors] = useState({});
  const [isFilled, setIsFilled] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
    const updatedFormData = {
      ...formData,
      [name] : fieldValue,
    };
    setIsFilled(Object.values(updatedFormData).every(val => !!val));
  };

  const validateForm = () => {
    const { name, username, email, password, termsChecked } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!username.trim()) {
      newErrors.username = 'Please enter a username';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter a password';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!termsChecked) {
      newErrors.termsChecked = 'Please agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Proceed to CreateProfile page
    navigate('/create-profile');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-4 px-8 flex justify-end items-center bg-white">
        <div className="text-sm">
          <p>Already a member? <a href="#!" className="text-blue-500">Sign In</a></p>
        </div>
      </nav>
      <div className="max-w-md mx-auto p-8 mt-8 bg-white rounded-md">
        <h1 className="text-2xl font-bold mb-8">Sign up to Dribbble</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
              <input type="text" id="name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required className="w-full h-9 border rounded-md bg-white focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:shadow-md" />
              {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-1">Username</label>
              <input type="text" id="username" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required className="w-full h-9 border rounded-md bg-white focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:shadow-md" />
              {errors.username && <p className="text-red-500 mt-1">{errors.username}</p>}
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input type="email" id="email" placeholder="Ex:example@example.com" name="email" value={formData.email} onChange={handleChange} required className="w-full h-9 border rounded-md bg-white focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:shadow-md" />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input type="password" id="password" placeholder="6+ Characters" name="password" value={formData.password} onChange={handleChange} required className="w-full h-9 border rounded-md bg-white focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:shadow-md" />
            {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
          </div>
          <div className="mb-5 flex items-start">
            <input type="checkbox" id="terms" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} className="h-5 w-5 mr-2" required />
            <label htmlFor="terms" className="text-xs text-gray-700 cursor-pointer">Creating an account means you're okay with our <a href="#!" className="text-blue-500">Terms of Services, Privacy Policy,</a> and our default <a href="#!" className="text-blue-500">Notification Settings.</a></label>
            {errors.termsChecked && <p className="text-red-500 mt-1">{errors.termsChecked}</p>}
          </div>
          <Button isFilled = {isFilled} type="submit">Create Account</Button>
          <p className="text-[10px] text-gray-600 mt-3">This site is protected by reCAPTCHA and the Google <br/><a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#!" className="text-blue-500">Terms of Services</a> apply.</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
