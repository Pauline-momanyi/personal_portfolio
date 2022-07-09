import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector2 from '../../img/Vector2.png'
import  DSC_3183 from '../../img/DSC_3183.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context/Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

function Intro() {
    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={darkMode? {color: 'white'}:{}}>Hi! I Am</span>
                <span>Pauline Momanyi</span>
                <span>Software Developer with experience in both frontend and backend design and development.</span>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'> 
                <button className="button i-button">Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/Pauline-momanyi"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/pauline-momanyi-451a95147/"><img src={LinkedIn} alt="" /></a>
                <a href="https://www.instagram.com/momz55/"><img src={Instagram} alt="" /></a>               
            </div>
        </div>
        <div className="i-right">
            <img src={Vector2} alt="" />
            <img src={DSC_3183} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesemoji} alt="" />
            <motion.div
                initial={{left: '9rem'}}
                whileInView={{left: '5rem'}}
                transition={transition}
                style={{top:'18rem', left: '5rem'}}> 
                <FloatingDiv image={Crown} txt1={'Web'} txt2={'Developer'}/> 
                {/* <FloatingDiv image={thumbup} txt1={'Best Design'} txt2={'Award'}/> */}
            </motion.div>
            {/* blur divs */}
            <div className="blur"></div>
            <div className="blur" style={{
                left:'-11rem',
                width: '21rem',
                height: '11rem',
                top:'17rem',
                background:'rgba(255, 99, 71, 0.3)'
            }}></div>
        </div>
    </div>
  )
}

export default Intro