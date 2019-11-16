import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
 
import sliderStyles from './heroSlider.module.scss'

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
    containerClass: `${sliderStyles.sliderContainer}`,
    // wrapperClass: `${sliderStyles.swiperWrapper}`
  }
 
  return(
    <div className={sliderStyles.goldBorderWrapper}>
        <Swiper {...params}>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)" srcset="https://via.placeholder.com/250x580" alt="placeholder"/>
          <source media="(min-width: 1024px)" srcset="https://via.placeholder.com/1230x760" alt="placeholder"/>
          <img src="https://via.placeholder.com/1230x760" alt="placeholder"/>
        </picture>
        </div>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)" srcset="https://via.placeholder.com/250x580" alt="placeholder"/>
          <source media="(min-width: 1024px)" srcset="https://via.placeholder.com/1230x760" alt="placeholder"/>
          <img src="https://via.placeholder.com/1230x760" alt="placeholder"/>
        </picture>
        </div>
        <div className={sliderStyles.singleSlide}>
        <picture>
          <source media="(max-width: 1023px)" srcset="https://via.placeholder.com/250x580" alt="placeholder"/>
          <source media="(min-width: 1024px)" srcset="https://via.placeholder.com/1230x760" alt="placeholder"/>
          <img src="https://via.placeholder.com/1230x760" alt="placeholder"/>
        </picture>
        </div>
        </Swiper>
    </div>
  )
}
 
export default SimpleSwiperWithParams;