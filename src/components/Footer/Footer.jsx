import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>paulinemomanyi55@gmail.com</span>
            <div className="f-icons">
                <LinkedIn color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                <Twitter color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer