
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrain, FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = ({ toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <FaTrain className="navbar__logo-icon" /> RailBooking
        </Link>

        <div className="navbar__toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__links">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/booking" className="navbar__links">
              Book Tickets
            </Link>
          </li>
          <li className="navbar__item">
            <div className="navbar__links navbar__dropdown-toggle" onClick={toggleDropdown}>
              Services <FaChevronDown className={`navbar__dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </div>
            <ul className={`navbar__dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li className="navbar__dropdown-item">
                <Link to="/meals" className="navbar__dropdown-Link">
                  In-Train Meals
                </Link>
              </li>
              <li className="navbar__dropdown-item">
                <Link to="/lounge" className="navbar__dropdown-Link">
                  Lounge Access
                </Link>
              </li>
              <li className="navbar__dropdown-item">
                <Link to="/wifi" className="navbar__dropdown-Link">
                  Onboard Wi-Fi
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__item navbar__item--button">
            <Link to="/login" className="navbar__links--button">
              Login
            </Link>
          </li>
          <li className="navbar__item navbar__item--button">
            <Link to="/signup" className="navbar__links--button navbar__links--button--outline">
              Sign Up
            </Link>
          </li>
          <li className="navbar__item">
            <button onClick={toggleSidebar} className="navbar__profile">
              <FaUserCircle className="navbar__profile-icon" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
