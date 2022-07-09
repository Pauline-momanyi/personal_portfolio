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
                <a href="https://www.linkedin.com/in/pauline-momanyi-451a95147/"><LinkedIn color='white' size='3rem'/></a>
                <a href="https://github.com/Pauline-momanyi"><Github color='white' size='3rem'/></a>
                <a href=""><Twitter color='white' size='3rem'/></a>              
            </div>
        </div>
    </div>
  )
}

export default Footer