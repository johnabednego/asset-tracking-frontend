import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
            <button type='button' onClick={() => navigate("/")} className="text-white text-3xl font-bold p-2">
                Asset Tracking
            </button>
            <nav>
                <button type='button' onClick={() => navigate("/")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Home
                </button>
                <button type='button' onClick={() => navigate("/profile")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Profile
                </button>
                <button type='button' onClick={() => navigate("/assets")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Assets
                </button>
                <button type='button' onClick={() => navigate("/login")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Login
                </button>
                <button type='button' onClick={() => navigate("/register")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Register
                </button>
                <button type='button' onClick={() => navigate("/reset-password")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Reset Password
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
