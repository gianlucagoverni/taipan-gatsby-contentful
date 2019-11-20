import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
 
import sliderStyles from './heroSlider.module.scss'
import hero1 from '../assets/hero-slider-1.jpg';
import hero1mobile from '../assets/hero-slider-1-mobile.jpg';

const SimpleSwiperWithParams = () => {
  const params = {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    containerClass: `${sliderStyles.sliderContainer}`
  }
 
  return(
    <div className={sliderStyles.goldBorderWrapper}>
        <Swiper {...params}>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)"  srcSet={hero1mobile} alt="placeholder"/>
          <source media="(min-width: 1024px)" srcSet={hero1} alt="placeholder"/>
          <img src={hero1} alt="placeholder"/>
        </picture>
        </div>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={hero1mobile} alt="placeholder"/>
          <source media="(min-width: 1024px)" srcSet={hero1} alt="placeholder"/>
          <img src={hero1} alt="placeholder"/>
        </picture>
        </div>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={hero1mobile} alt="placeholder"/>
          <source media="(min-width: 1024px)" srcSet={hero1} alt="placeholder"/>
          <img src={hero1} alt="placeholder"/>
        </picture>
        </div>
        </Swiper>
    </div>
  )
}
 
export default SimpleSwiperWithParams;