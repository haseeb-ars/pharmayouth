import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className="pharma-header sticky-header">
        <div className="logo-area">
          <a href="/">
 <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="PharmaYouth Logo" className="logo-img" />
  </a>
</div>


        {/* Desktop Nav */}
        <nav className="nav-menu desktop-nav">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link smooth to="/#about-section" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>

          <div className="login-area">
            <FaUserCircle size={20} />
            <Link to="/login" className="login-text">Log In</Link>
          </div>

          <Link to="/signup" className="get-started-btn">Get Started</Link>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={handleToggle}>
          <FaBars size={24} />
        </div>
      </header>

      {/* Mobile Menu Slider */}
      
<div className={`mobile-menu ${menuOpen ? 'slide-in' : 'slide-out'}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link smooth to="/#about-section" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/signup" onClick={closeMenu}>Get Started</Link>
          <Link to="/login" onClick={closeMenu}>Log In</Link>
          
        </div>
      
    </>
  );
};

export default Header;
