import React from 'react';
import './Programs.css';
import rightArrow from './../../assets/rightArrow.png'
import { programsData } from './../../data/programsData'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-head">
        <span className='stroke-text text-1'>Explore Our </span>
        <span className='hero-text text-1' >Programs</span>
        <span className='stroke-text text-1'>To Shape You</span>
      </div>
      <div className="programs-data">
        {programsData.map((program)=>(
          <div className="categories">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join1">
              <span>Join Now</span>
              <img src={rightArrow} alt="arrowsymbol" />
            </div>
          </div>
        )
  )}
      </div>
    </div>
  )
}

export default Programs