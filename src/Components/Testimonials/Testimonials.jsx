import React from 'react';
import './Testimonials.css'
import {testimonialsData} from './../../data/testimonialsData';
import leftArrow from './../../assets/leftArrow.png';
import rightArrow from './../../assets/rightArrow.png'
import {motion} from 'framer-motion';
const Testimonials = () => {
  const transition={type:'spring',duration:3}
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
      <div className="left1">
        <div className="head">Testimonials</div>
        <div className="heading">
          <span className='stroke-text'>What They</span>
          <span className='hero-text'>Say About Us</span>
        </div>
        <motion.div
        key={testData}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        className='tmd'>
          {testimonialsData[testData].review}
        </motion.div>
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
          <motion.div
          initial={{opacity:0,x:-100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1,x:0}}
          ></motion.div>
          <motion.div
          initial={{opacity:0,x:-100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1,x:0}}></motion.div>
         <span><motion.img 
         key={testData}
         initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}
         transition={transition}
         src={testimonialsData[testData].image} alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;