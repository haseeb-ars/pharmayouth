import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      

      <div className="footer-grid">
        {/* Contact */}
<div className="footer-top">
        <div className="footer-logo">
           <div className="logo-area">
  <img src="/footerl.png" alt="PharmaYouth Logo" className="logo-img" />
</div>
        </div>
      </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Unit 6D Longden Road, Levenshulme<br />Manchester, M12 5SR</p>
          <p>Sales: info@pharmayouth.com</p>
          <p>General Inquiries: 123-456-7890</p>
          <p>Customer Care: care@pharmayouth.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="facebook.com">Terms & Conditions</a><br />
          <a href="facebook.com">Privacy Policy</a>
        </div>

        {/* Follow / Newsletter */}
        <div className="footer-column">
          <h3>Follow</h3>
          <p>Sign up to get the latest news on our product.</p>
          <form>
            <label htmlFor="email">Email *</label><br />
            <input type="email" id="email" name="email" required />
            
            <button type="submit" >Subscribe</button>
          </form>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
