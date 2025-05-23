import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to your PharmaYouth account</p>

        <form className="login-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <div className="login-actions">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
