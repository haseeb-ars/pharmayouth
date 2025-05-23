import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join PharmaYouth to access personalized services</p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Company / Pharmacy (optional)" />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Sign Up</button>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
