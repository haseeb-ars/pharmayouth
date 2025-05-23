import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-flex">
      <div className="contact-image">
        <img src="/Contact3.png" alt="contact" />
      </div>

      <div className="contact-form-section">
        <h2>Doing The Right Thing, At The Right Time</h2>
        <p>
          Have a question about our products, services, or partnership opportunities? We’re here to help. <br></br>
          Fill out the form below and one of our team members will get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter a valid email address" required />
          </div>
          <input type="text" placeholder="Enter your Contact Number" required />
          <textarea placeholder="Enter your message" rows="4" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
