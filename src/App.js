import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import UserProfile from './pages/UserProfile';
import AssetManagement from './pages/AssetManagement';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pt-16"> {/* Add padding to avoid content overlap */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/assets" element={<AssetManagement />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
