import React from 'react'

import { Link } from 'react-router-dom';

import './header-content.sass'
const HeaderContent = () => {
  return(
  <header className="header">  
    <div className="header__content">
      <div className="container">
        <h1 className="header__content--title">
          Not only people need a house
        </h1>
        <p className="header__content--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida 
                                              est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula 
                                              condimentum erat fringilla et.</p>
        <Link className="header__content--button button" to="pets">Make a friend</Link>
      </div>
    </div>
  </header>
);
};

export default HeaderContent;