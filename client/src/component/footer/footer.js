import React from 'react'

import './footer.sass'

import email from './icons/email.png'
import phone from './icons/phone.png'
import location from './icons/location.png'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__questions">
            <h3 className="footer__title">For questions and suggestions</h3>
            <div className="footer__contact--item">
              <img className="footer__icon" src={email} alt="email" />
              <p className="footer__text">email@shelter.com</p>
            </div>
            <div className="footer__contact--item">
              <img className="footer__icon" src={phone} alt="email" />
              <p className="footer__text">+13 674 567 75 54</p>
            </div>
          </div>
          <div className="footer__visit">
          <h3 className="footer__title">We are waiting for your visit</h3>
            <div className="footer__contact--item">
              <img className="footer__icon" src={location} alt="email" />
              <p className="footer__text">Boston, Central Street, 1st
                                            (Entrance from the store)</p>
            </div>
            <div className="footer__contact--item">
              <img className="footer__icon" src={location} alt="email" />
              <p className="footer__text">London, South Park, 18st</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer