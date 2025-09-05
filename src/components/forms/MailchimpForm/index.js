// components/MailchimpForm.jsx
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import '../../../assets/sass/mailchimp-form.sass'

const MailchimpForm = () => {
  const [EMAIL, setEmail] = useState('');
  const [FNAME, setFname] = useState('');
  const [LNAME, setLname] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Basic validation
    if (!EMAIL || !EMAIL.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      //const response = await fetch('/api/subscribe', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ email }),
      //});

      const response = await addToMailchimp(EMAIL, {
        FNAME: FNAME, 
        LNAME: LNAME,
      });

      console.log('MailChimp response:', response); // Debug log

      //if (response.ok) {
      //  setStatus('success');
      //  setEmail('');
      //} else {
      //  setStatus('error');
      //}
      //} catch (error) {
      //  setStatus('error');
      //}
    if (response.result === 'success') {
        setStatus('success');
        setMessage(response.msg || 'Thank you for subscribing!');
        // Clear form on success
        setEmail('');
        setFname('');
        setLname('');
      } else if (response.result === 'error') {
        setStatus('error');
        // MailChimp returns HTML in error messages, strip it for display
        const cleanMessage = response.msg.replace(/<[^>]*>/g, '');
        setMessage(cleanMessage || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="mailchimp-form">
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="field">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              value={EMAIL}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className="field">
            <label htmlFor="fname">First Name *</label>
            <input
              id="fname"
              type="text"
              value={FNAME}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter your first name"
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className="field">
            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              type="text"
              value={LNAME}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter your Last Name"
              required
              disabled={status === 'loading'}
            />
          </div>
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className={`subscribe-button ${status === 'loading' ? 'loading' : ''}`}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      
      </form>
    
      {message && (
        <div className={`message ${status}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default MailchimpForm