import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero from '../../assets/hero_image.png';
import heroback from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion';

const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className='Hero-container'>
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        <div className="best-fit">
          <motion.div
          initial={{left: mobile ? '130px':'220px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'linear'}}
          ></motion.div>
          <span>The Best Fitness club in the Town</span>
        </div>
        <div className="hero-text texty">
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
      <div className="right-h">
        <button className='btn'>Join Now</button>

      <motion.div className='heart-rate'
      initial={{right:'-1rem'}}
      whileInView={{right:'4rem'}}
      transition={transition}

      >
        <img src={heart} alt="heart" />
        <span>Heart Beat</span>
        <span>116 bpm</span>
      </motion.div>
      <img src={hero} alt="hero" className='hero-img' />
      <motion.img 
      initial={{right:'11rem'}}
      whileInView={{right:'20rem'}}
      transition={transition}
      src={heroback} alt="background" className='hero-back' />
      <motion.div className="calories"
      initial={{right:'37rem'}}
      whileInView={{right:'28rem'}}
      transition={transition}>
      
        <img src={calories} alt="calories"/>
        <div>
        <span>Calories Burned</span>
        <span>220kcal</span>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Hero;