import React from 'react';
import './Hero.css';
import Header from '../Header/Header';

const Hero = () => {
  return (
    <div className='Hero-container'>
      <div className="left-h">
        <Header />
        <div className="best-fit">
          <div></div>
          <span>The Best Fitness club in the Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
            </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className='hero-btn'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className="right-h">RightSide</div>
    </div>
  )
}

export default Hero;