import React from 'react';

import './donation.sass';

import donationDog from './DogDonation.png';
import card from './card.png'
const Donation = () => {
  return(
    <div className="donation">
      <div className="container">
        <div className="donation__inner">
          <img className="donation__img" src={donationDog} alt="donation dog"/>
          <div className="donation__content">
            <h2 className="donation__title title">
              In addition, you <br/>can make a donation
            </h2>
            <p className="donation__text">
              Name of the bank / Type of bank account
            </p>
            <div className="donation__bank">
              <img className="donation__bank--card" src={card} alt="bank card"/>
              <p className="donation__bank--number">8380 2880 **** **** 7435</p>
            </div>
            <p className="donation__desc">
            Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas a ipsum at libero sagittis dignissim sed 
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum 
            et malesuada fames ac ante ipsum primis in faucibus. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation