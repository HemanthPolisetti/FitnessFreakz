import React from 'react'
import img1 from './../../assets/image1.png'
import img2 from './../../assets/image2.png'
import img3 from './../../assets/image3.png'
import img4 from './../../assets/image4.png'
import tick from './../../assets/tick.png'
import './Reasons.css'
const Reasons = () => {
  return (
    <div className="reasons">
        <div className="images">
            <img src={img1} alt="im1" />
            <img src={img2} alt="im2" />
            <img src={img3} alt="im3" />
            <img src={img4} alt="im4" />
        </div>
        <div className="right">
          <span>Some Reasons</span>
          <div className='new-div'>
          <span className='stroke-text new-div'>Why </span>
          <span className='hero-text new-div'> Choose Us?</span>
          </div>
          <div className='matter'>
            <div ><img src={tick} alt="tick" /><span className='hero-text text1'> RELIABLE PARTNERS</span></div>
            <div ><img src={tick} alt="tick" /><span className='hero-text text1'> OVER 140+ EXPERT COACHS</span></div>
            <div ><img src={tick} alt="tick" /><span className='hero-text text1'> TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
            <div ><img src={tick} alt="tick" /><span className='hero-text text1'> 1 FREE PROGRAM FOR NEW MEMBER</span></div>
          </div>
        </div>
    </div>
  )
}

export default Reasons