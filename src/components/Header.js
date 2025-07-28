import React, { useState, useEffect } from 'react';
import {  FaBars, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.mobile-menu') &&
        !e.target.closest('.hamburger') &&
        !e.target.closest('.submenu-wrapper') &&
        !e.target.closest('.submenu-mobile')
      ) {
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
            <img src={`${process.env.PUBLIC_URL}/LogoM.png`} alt="PharmaYouth Logo" className="logo-img" />
          </a>
        </div>

        <nav className="nav-menu desktop-nav">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/pharmacy" className="nav-link" onClick={closeMenu}>Pharmacy</Link> 
          <Link smooth to="/about" className="nav-link" onClick={closeMenu}>About</Link>


          <div className="submenu-wrapper">
            <div className="nav-link submenu-toggle" onClick={() => setSubmenuOpen(!submenuOpen)}>
              What we do <FaChevronDown size={12} style={{ marginLeft: '4px' }} />
            </div>
            
              <div className={`dropdown-menu ${submenuOpen ? 'show' : ''}`}>
                <Link to="/cbpm" className="dropdown-link" onClick={closeMenu}>CBPMs and Unlicensed Medicines</Link>
                <Link to="/importexport" className="dropdown-link" onClick={closeMenu}>Import & Export</Link>
                <Link to="/wholesale" className="dropdown-link" onClick={closeMenu}>Wholesale</Link>
                <Link to="/specialobtains" className="dropdown-link" onClick={closeMenu}>Special Obtains</Link>
              </div>
        
          </div>

        

          <Link to="/contact" className="get-started-btn">Contact us</Link>
        </nav>

        <div className="hamburger" onClick={handleToggle}>
          <FaBars size={24} />
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'slide-in' : 'slide-out'}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/pharmacy" onClick={closeMenu}>Pharmacy</Link>
        <Link smooth to="/about" className="nav-link" onClick={closeMenu}>About</Link>

        <div className="submenu-mobile">
          <div className="nav-link submenu-toggle" onClick={() => setSubmenuOpen(!submenuOpen)}>
            What we do <FaChevronDown size={12} style={{ marginLeft: '4px' }} />
          </div>
          {submenuOpen && (
            <div className={`dropdown-menu ${submenuOpen ? 'show' : ''}`}>
  <Link to="/cbpm" className="dropdown-link" onClick={closeMenu}>CBPMs and Unlicensed Medicines</Link>
  <Link to="/importexport" className="dropdown-link" onClick={closeMenu}>Import & Export</Link>
  <Link to="/wholesale" className="dropdown-link" onClick={closeMenu}>Wholesale</Link>
  <Link to="/specialobtains" className="dropdown-link" onClick={closeMenu}>Special Obtains</Link>
</div>

          )}
        </div>

        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Header;
