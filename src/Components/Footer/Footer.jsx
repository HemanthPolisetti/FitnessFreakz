import React from 'react';
import './Footer.css';
import gh from './../../assets/github.png';
import insta from './../../assets/instagram.png';
import lin from './../../assets/linkedin.png';
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <hr />
        </div>
      <div className="icons">
        <img src={gh} alt="gh" />
        <img src={insta} alt="insta" />
        <img src={lin} alt="lin" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Footer;