import React from 'react'
import './Services.css'
import glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
import resume from './PaulineM_Resume.pdf'
import {themeContext} from '../../Context/Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'

function Services() {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span style={darkMode? {color: 'white'}:{}}>My Awesome</span>
            <span>Services</span>
            <span>I design and implement web applications. <br/> You can also checkout my resume below.</span>
            <a href={resume} download><button className='button s-button'>Download CV</button></a>
            
        </div>
        <div className="cards">
            <motion.div 
                 initial={{left: '20rem'}}
                 whileInView={{left: '14rem'}}
                 transition={transition}
                style={{left: '14rem'}}
                >
                <Card
                emoji = {glasses}
                heading = {'Design'}
                detail = {'Figma, Adobe Photoshop'}
                />
            </motion.div>
            <motion.div
             initial={{left: '-30%'}}
             whileInView={{left: '-4rem'}}
             transition={transition}
            style={{left: '-4rem', top: '12rem'}}
            >
                <Card
                emoji = {HeartEmoji}
                heading = {'Developer'}
                detail = {'Javascript, React, Ruby, Rails'}
                />
            </motion.div>
            {/* <motion.div             
            initial={{left: '18rem'}}
            whileInView={{left: '12rem'}}
            transition={transition}
            style={{left: '12rem', top: '19rem'}}
            >
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {'Lorem ipsum is a dummy text used by developers'}
                />
            </motion.div> */}
            <div className="blur s-blur1" style={{background:'rgba(255, 99, 71, 0.3)'}}></div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services