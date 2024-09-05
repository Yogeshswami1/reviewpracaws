import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  footer: {
    background: '#000',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
  footerColumn: {
    flex: 1,
    minWidth: '200px',
  },
  footerColumnHeading: {
    marginBottom: '20px',
    color: '#ff0000', // Red color for headings
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '8px 0',
    transition: 'color 0.3s ease',
  },
  newsletter: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'center',
  },
  newsletterInputEmail: {
    width: '80%',
    padding: '12px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  newsletterInputSubmit: {
    backgroundColor: '#ff0000', // Red color for button
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0',
  },
  socialIcon: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'color 0.3s ease',
  },
  copyright: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerContainer}>
        <div style={footerStyles.footerColumn}>
          <h3 style={footerStyles.footerColumnHeading}>Quick Links</h3>
          <div style={footerStyles.footerLinks}>
            <Link to="/home" style={footerStyles.footerLink}>Home</Link>
            <Link to="/about" style={footerStyles.footerLink}>About</Link>
            <Link to="/margins" style={footerStyles.footerLink}>Margins</Link>
          </div>
        </div>
        <div style={footerStyles.footerColumn}>
          <h3 style={footerStyles.footerColumnHeading}>Newsletter</h3>
          <div style={footerStyles.newsletter}>
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Your email here"
                style={footerStyles.newsletterInputEmail}
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="submit"
                value="Subscribe"
                style={footerStyles.newsletterInputSubmit}
              />
            </form>
            {message && <p style={{ color: '#fff', marginTop: '10px' }}>{message}</p>}
          </div>
        </div>
        <div style={footerStyles.footerColumn}>
          <h3 style={footerStyles.footerColumnHeading}>Follow Us</h3>
          <div style={footerStyles.socialIcons}>
            <a href="#" style={footerStyles.socialIcon}>&#x1F426;</a> {/* Twitter Icon */}
            <a href="#" style={footerStyles.socialIcon}>&#x1F464;</a> {/* Facebook Icon */}
            <a href="#" style={footerStyles.socialIcon}>&#x1F4F7;</a> {/* Instagram Icon */}
            <a href="#" style={footerStyles.socialIcon}>&#x1F4F2;</a> {/* LinkedIn Icon */}
          </div>
        </div>
      </div>
      <div style={footerStyles.copyright}>
        &copy; All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
