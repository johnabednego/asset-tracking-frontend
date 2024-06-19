import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className=" w-full fixed bg-gray-800 text-white py-4 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-white text-3xl font-bold"
        >
          Asset Tracking
        </button>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Profile
          </button>
          <button
            type="button"
            onClick={() => navigate('/assets')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Assets
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/reset-password')}
            className="text-white py-2 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Reset Password
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
