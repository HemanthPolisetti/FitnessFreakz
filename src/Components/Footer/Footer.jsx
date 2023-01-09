import React from 'react';
import './Footer.css';
import gh from './../../assets/github.png';
import insta from './../../assets/instagram.png';
import lin from './../../assets/linkedin.png';
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="blur blur-f"></div>
      <div className="blur blur-f1"></div>
      <div>
        <hr />
        </div>
      <div className="icons">
        <a href='https://github.com/HemanthPolisetti/FitnessFreakz' target='_blank' rel="noreferrer"><img src={gh}  alt="gh" /></a>
        <a href='https://www.instagram.com/hemanthpolisetti' target='_blank' rel="noreferrer"><img src={insta} alt="insta" /></a>
        <a href='https://www.linkedin.com/in/hemanth-polisetti-042308171/' target='_blank' rel="noreferrer"><img src={lin} alt="lin" /></a>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Footer;