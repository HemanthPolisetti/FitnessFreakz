import React from 'react'
import './PlanCard.css'
import { plansData } from '../../data/plansData'
import whiteTick from './../../assets/whiteTick.png'
import rightArrow from './../../assets/rightArrow.png'

const PlanCard = () => {
    
  return (
    <div className='plan-card' id='plans'>
        <div className="blur blur-p1"></div>
        <div className="blur blur-p2"></div>
        <div className="top">
            <span className='stroke-text txt1'>Ready to Start</span>
            <span className='hero-text txt1'>Your Journey</span>
            <span className='stroke-text txt1'>Now With Us</span>
        </div>
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>{plan.icon}
                    <span className='name'>{plan.name}</span>
                    <span className='price'>$ {plan.price}</span>
                    <div className='features'>{plan.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="wt" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))
                    }
                    </div>
                <div className='smb'>
                    <span>See More Benefits</span>
                    <img src={rightArrow} alt="ra" />
                </div>   
                <button className='btn'>Join Now</button>
                </div>
                
                

            ))}
        </div>
    </div>
  )
}


export default PlanCard