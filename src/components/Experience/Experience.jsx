import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle">1+</div>
            <span>year(s)</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="blur e-blur1" style={{background:'rgba(255, 99, 71, 0.1)'}}></div>
        <div className="blur e-blur2" style={{background:'rgba(255, 99, 71, 0.1)'}}></div>     
    </div>
  )
}

export default Experience