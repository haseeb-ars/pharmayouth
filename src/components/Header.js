import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`pharma-header sticky-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-area">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="PharmaYouth Logo" className="logo-img" />
          </a>
        </div>

        <nav className="nav-menu desktop-nav">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link smooth to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/whatwedo" className="nav-link" onClick={closeMenu}>What we do</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>

          <div className="login-area">
            <FaUserCircle size={20} />
            <Link to="/login" className="login-text">Login</Link>
          </div>

          <Link to="/signup" className="get-started-btn">Get Started</Link>
        </nav>

        <div className="hamburger" onClick={handleToggle}>
          <FaBars size={24} />
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'slide-in' : 'slide-out'}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link smooth to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/whatwedo" className="nav-link" onClick={closeMenu}>What we do</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/signup" onClick={closeMenu}>Get Started
        </Link>
        <Link to="/login" onClick={closeMenu}>Log In</Link>
      </div>
    </>
  );
};

export default Header;
