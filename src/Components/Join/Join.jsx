import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className="join" id='join'>
        <div className="left-cont">
            <hr />
            <div>
            <span className='stroke-text str-txt'>Ready to</span>
            <span className='hero-text bld-txt'> Level Up</span>
            </div>
            <span className='hero-text bld-txt '>Your Body</span>
            <span className='stroke-text str-txt'> With Us?</span>
        </div>
        <div className="right-cont">
            <div className="input">
                <input className='input-name' type="email" placeholder='Enter Your Email Address here...'/>
                <button className='btn'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Join