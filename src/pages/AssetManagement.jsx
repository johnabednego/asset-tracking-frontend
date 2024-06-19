import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetManagement = () => {
  const [assets, setAssets] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get('https://your-backend-domain/api/assets', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setAssets(res?.data);
      } catch (err) {
        setMessage(err?.response?.data?.msg);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Asset Management</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="bg-white p-6 rounded shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50">Tag ID</th>
              <th className="px-6 py-3 bg-gray-50">Serial Number</th>
              <th className="px-6 py-3 bg-gray-50">Name</th>
              <th className="px-6 py-3 bg-gray-50">Procurement Date</th>
              <th className="px-6 py-3 bg-gray-50">Lifecycle Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets?.map((asset) => (
              <tr key={asset._id}>
                <td className="px-6 py-4">{asset.tagID}</td>
                <td className="px-6 py-4">{asset.serialNumber}</td>
                <td className="px-6 py-4">{asset.name}</td>
                <td className="px-6 py-4">{asset.procurementDate}</td>
                <td className="px-6 py-4">{asset.lifecycleStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetManagement;
