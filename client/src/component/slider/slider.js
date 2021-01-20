import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import './slider.sass'
import 'swiper/swiper.scss';

import data from '../../data.json'

const Slider = () => {
   return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3} 
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="friends__slider--item">
            <div className="friends__slider--img">
              <img src={require(`../../petImg/${item.title}.png`)} alt="pet" />
            </div>
            <p className="friends__slider--title">{item.title}</p>
            <Link className="friends__slider--button button" to={`/pet/${idx}`}>Learn More</Link>
          </div>
        </SwiperSlide>
      ))}  
    </Swiper>
  );
};

export default Slider