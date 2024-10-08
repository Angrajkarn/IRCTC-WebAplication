import React, { useState } from 'react';
import './forgetpass.scss';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Simulate an API request
    setTimeout(() => {
      setSubmitting(false);
      alert('Password reset link sent to your email.');
    }, 2000);
  };

  return (
    <div className="forgot-pass-container">
      <div className="forgot-pass-content">
        <h1>Forgot Password?</h1>
        <p>Enter your email address below and we’ll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
