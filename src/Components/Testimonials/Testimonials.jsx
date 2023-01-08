import React from 'react';
import './Testimonials.css'
import {testimonialsData} from './../../data/testimonialsData';
import leftArrow from './../../assets/leftArrow.png';
import rightArrow from './../../assets/rightArrow.png'
const Testimonials = () => {
  const[testData,setTestData]=React.useState(0);
  const length=testimonialsData.length
  const backward=()=>{
    return(testData===0?setTestData(length-1):setTestData(previousTestData=>
      previousTestData-1)
  )}
  const forward=()=>{
    return(testData===length-1?setTestData(0):setTestData(previousTestData=>
      previousTestData+1)
  )}
  return (
    <div className="testimonials">
      <div className="left">
        <div className="head">Testimonials</div>
        <div className="heading">
          <span className='stroke-text'>What They</span>
          <span className='hero-text'>Say About Us</span>
        </div>
        <div className='tmd'>
          {testimonialsData[testData].review}
        </div>
        <div className='span-txt'>
        <span>{testimonialsData[testData].name}</span>
        <span> -{testimonialsData[testData].status}</span>
        </div>
      </div>
      <div className="right1">
        <div className="buttons1">
        <img src={leftArrow} onClick={backward}alt="la" />
        <img src={rightArrow} onClick={forward}alt="ra" />
        </div>
        <div className="images1">
          <div></div>
          <div></div>
         <span><img src={testimonialsData[testData].image} alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;