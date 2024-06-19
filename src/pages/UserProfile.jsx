import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('https://your-backend-domain/api/users/me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfile(res?.data);
      } catch (err) {
        setMessage(err?.response?.data?.msg);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">User Profile</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-lg mb-4"><strong>Name:</strong> {profile?.name}</p>
        <p className="text-lg mb-4"><strong>Email:</strong> {profile?.email}</p>
        <p className="text-lg mb-4"><strong>Role:</strong> {profile?.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
