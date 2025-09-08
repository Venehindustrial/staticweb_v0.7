// components/MailchimpForm.jsx
import React, { useState, useEffect } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import '../../../assets/sass/mailchimp-form.sass'

const MailchimpForm = () => {
  const [EMAIL, setEmail] = useState('');
  const [FNAME, setFname] = useState('');
  const [LNAME, setLname] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  //const [captchaToken, setCaptchaToken] = useState('');
  //const recaptchaRef = useRef(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) return;
      
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GATSBY_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const executeRecaptcha = () => {
    return new Promise((resolve) => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(process.env.GATSBY_RECAPTCHA_SITE_KEY, {
            action: 'mailchimp_subscribe'
          }).then((token) => {
            resolve(token);
          });
        });
      } else {
        // Fallback if reCAPTCHA fails to load
        resolve('');
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous status/message
    setStatus('loading');
    setMessage('');

    // Basic validation
    if (!EMAIL || !EMAIL.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!FNAME.trim()) {
      setStatus('error');
      setMessage('Please enter your first name.');
      return;
    }

    try {

      //console.log('Submitting to Mailchimp:', { EMAIL, FNAME, LNAME });
      // Execute reCAPTCHA
      const captchaToken = await executeRecaptcha();
      
      console.log('Submitting to Mailchimp with CAPTCHA token');
      //const response = await fetch('/api/subscribe', {
      //  method: 'POST',
      //  headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ email }),
      //});

      //const response = await addToMailchimp(EMAIL, {
      //  FNAME: FNAME.trim(), 
      //  LNAME: LNAME.trim(),
      //});

      const response = await addToMailchimp(EMAIL, {
        FNAME: FNAME.trim(),
        LNAME: LNAME.trim(),
        'g-recaptcha-response': captchaToken, // Add CAPTCHA token
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
      } else if (response.result === 'redirect') {
        // Handle redirect case (still requires CAPTCHA)
        if (response.msg === 'captcha') {
          setStatus('error');
          setMessage('Please complete the verification. If this persists, try again in a few minutes.');
        } else {
          // Open redirect URL in new window for manual completion
          window.open(response.msg, '_blank');
          setStatus('info');
          setMessage('Please complete the subscription in the new window that opened.');
        }
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
            <label htmlFor="lname">Last Name *</label>
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

      {/* Debug information - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
          Status: {status} | Message: {message}
        </div>
      )}

      <div className="recaptcha-notice">
        <small>
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{' '}
          apply.
        </small>
      </div>
    </div>
  );
};

export default MailchimpForm
export { MailchimpForm }