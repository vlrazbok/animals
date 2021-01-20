import React from 'react'

import './contacts.sass'

const Contacts = () =>{
  return(
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <h2 className="contacts__title title">Our contacts</h2>
          <div className="contacts__information">
            <div className="contacts__questions">
              <h3 className="contacts__title--item title">For questions and suggestions</h3>
              <div className="contacts__contact--item">
                <p className="contacts__text">email@shelter.com</p>
              </div>
              <div className="contacts__contact--item">
                <p className="contacts__text">+13 674 567 75 54</p>
              </div>
            </div>
            <div className="contacts__visit">
            <h3 className="contacts__title--item title">We are waiting for your visit</h3>
              <div className="contacts__contact--item">
                <p className="contacts__text">Boston, Central Street, 1st
                                              (Entrance from the store)</p>
              </div>
              <div className="contacts__contact--item">
                <p className="contacts__text">London, South Park, 18st</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;