import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  const verifyEmail = async () => {
    try {
      const res = await axios.get(`https://your-backend-domain/api/auth/verify-email?token=${token}`);
      setMessage(res?.data?.msg);
    } catch (err) {
      setMessage(err?.response?.data?.msg);
    }
  };

  useState(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Email Verification</h2>
        {message && <p className={message?.includes('success') ? 'text-green-500' : 'text-red-500'}>{message}</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
