import React from 'react'

import Slider from '../slider'

import 'swiper/components/navigation/navigation.scss';
import './friends.sass'
import { Link } from 'react-router-dom';

const Friends = () => {

  return(
    <div className="friends">
      <div className="friends__inner">
        <div className="container">
          <h2 className="friends__title title">Our friends who <br/>are looking for a house</h2>
          
          <div className="friends__slider">
            <Slider />     
          </div>
          <Link className="friends__button button" to="pets">Get to know the rest</Link>
        </div>
      </div>
    </div>
  );
}

export default Friends