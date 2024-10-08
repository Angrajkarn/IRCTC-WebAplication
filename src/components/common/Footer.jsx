import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h2 className="footer__title">RailBooking</h2>
          <p className="footer__description">
            Your trusted partner for booking train tickets with ease. Experience the best travel with us.
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__subtitle">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/search" className="footer__link">Search Trains</Link></li>
            <li><Link to="/booking" className="footer__link">Book Tickets</Link></li>
            <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__subtitle">Contact Us</h3>
          <p className="footer__contact">
            <strong>Email:</strong> support@railbooking.com<br />
            <strong>Phone:</strong> +1 234 567 890
          </p>
        </div>

        <div className="footer__section footer__social">
          <h3 className="footer__subtitle">Follow Us</h3>
          <div className="footer__social-links">
            <Link to="https://facebook.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link to="https://twitter.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link to="https://instagram.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link to="https://linkedin.com" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom-text">
          &copy; {new Date().getFullYear()} RailBooking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
