import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Clima from '../../img/Clima.png' 
import Moringa_quer from '../../img/m_quer.png' 
import Pizza from '../../img/pizza_place.png'
import 'swiper/css'
import {themeContext} from '../../Context/Context'
import {useContext} from 'react'


function Portfolio() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={darkMode? {color: 'white'}:{}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        // data-swiper-autoplay="2000"
        breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Pizza} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Clima} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Moringa_quer} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio