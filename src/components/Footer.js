import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      

      <div className="footer-grid">
        {/* Contact */}
<div className="footer-top">
        <div className="footer-logo">
           <div className="logo-area">
  <img src="/FooterL.png" alt="PharmaYouth Logo" className="logo-img" />
</div>
        </div>
      </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Ams Medical Accountants Limited, Floor 2, 9 Portland Street<br />Manchester, United Kingdom, M1 3BE</p>
          <p>Sales: info@pharmayouth.com</p>
          <p>General Inquiries:  +44 7352 326747</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/termspage">Terms & Conditions</Link>
          <br />
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Follow / Newsletter */}
        <div className="footer-column">
          <h3>Follow </h3>
          <p>Follow us on linkedIn</p>
          <div className="linkedin-follow">
  <a
    href="https://www.linkedin.com/company/pharmayouth"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow us on LinkedIn"
  >
    <img
      src="/linkedin.png"
      alt="LinkedIn"
      className="linkedin-icon"
    />
  </a>
</div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
