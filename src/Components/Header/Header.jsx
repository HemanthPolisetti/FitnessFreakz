import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <ul className="header-menu">
        <li><Link to='hero'span={true} smooth={true}>Home</Link></li>
        <li >< Link to='programs'span={true} smooth={true} >Programs</Link></li>
        <li ><Link to='reasons' span={true} smooth={true}>Why us</Link></li>
        <li ><Link to ='plans'span={true} smooth={true}>Plans</Link></li>
        <li ><Link to ='testimonials'span={true} smooth={true}>Testimonials</Link></li>
      </ul>
    </div>
  )
};

export default Header;