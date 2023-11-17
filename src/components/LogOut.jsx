import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded max-w-md">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-4">Are you sure you want to logout?</p>
        <div className="flex gap-12">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
            onClick={() => navigate('/dashboard')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
