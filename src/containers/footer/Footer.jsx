import React from 'react';
import logo from '../../assets/logo.png'
import './footer.css';
const Footer = () => {
  return (
    <div className='pikup__footer section__padding'>
      <div className='pikup__footer-heading'>
        <h1 className='gradient__text'>Do you want to Experience Greatness</h1>
      </div>

      <div className='pikup__footer-btn'>
        <p>Request Early Bird</p>
      </div>
      <div className='pikup__footer-links'>
        <div className='pikup__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>@BlessObika, All Rights Reserved</p>
        </div>

        <div className='pikup__footer-links_div'>
          <h4>Links</h4>
          <p>News</p>
          <p>Social Media</p>
          <p>blog</p>
          <p>Contact</p>
        </div>
        <div className='pikup__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='pikup__footer-links_div'>
          <h4>Get in Touch </h4>
          <p>Our nation's </p>
          <p>057-23849</p>
          <p>info@ratemywork.com</p>
        </div>
      </div>

      <div className='pikup__footer-copyright'>
        <p>&copy; 2023 @BlessObika All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
