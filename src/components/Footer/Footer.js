import React from 'react';
import logo from '../Footer/logoFooter.png'
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <img src={logo} alt="logo-footer" className='logo-footer'/>
      <p className='text-footer'>
        © 2020 Kasa. All rights reserved
      </p>
      </div>
    </footer>
  );
};

export default Footer;
