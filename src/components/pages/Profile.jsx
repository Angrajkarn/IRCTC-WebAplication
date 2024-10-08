import React, { useState } from 'react';
import { FaUserEdit, FaTicketAlt, FaWallet,FaCog, FaLink, FaHeadset, FaLanguage, FaPhone, FaSearch } from 'react-icons/fa';
import './Profile.scss';

const Profile = ({ toggleSidebar, isSidebarOpen,user}) => {
  const [photo, setPhoto] = useState('https://via.placeholder.com/80'); // Placeholder for the profile photo URL
  const [uploading, setUploading] = useState(false);

  const handleMenuItemClick = () => {
    toggleSidebar();
    // Any additional actions on item click can go here
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className={`profile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="profile-close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={photo} alt="User Avatar" />
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo-upload" className="photo-upload-btn">
              {uploading ? 'Uploading...' : 'Upload Photo'}
            </label>
          </div>
          <div className="profile-info">
            {user ? (
              <>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </>
            ) : (
              <>
                <h2>Guest</h2>
                <button><a href="/login">Please Login</a></button>
              </>
            )}
          </div>
        </div>
        <div className="profile-menu">
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaUserEdit size={20} />
            <span>Edit Profile</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaTicketAlt size={20} />
            <span>My Booking</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaWallet size={20} />
            <span>Transactions</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaSearch size={20} />
            <span>PNR Check</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaLink size={20} />
            <span>Link your IRCTC Account</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaPhone size={20} />
            <span>Contact Us</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaCog size={20} />
            <span>Settings</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaHeadset size={20} />
            <span>Customer Services</span>
          </div>
          <div className="profile-menu-item" onClick={handleMenuItemClick}>
            <FaLanguage size={20} />
            <span>Language</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
