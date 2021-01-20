import React from 'react'

import './help.sass'


import helpData from './helpData.json'

const Help = () =>{
  return(
    <div className="help">
      <div className="help__inner">
        <div className="container">
          <h2 className="help__title title">
            Than you can help our shelter
          </h2>
          <div className="help__content">
          {helpData.map((item, idx) => (
            <div className="help__content--item" key={idx}>
              <div className="img-wrapper"> 
              <img className="help__content--img" 
              src={require(`./helpImg/${item.title}.png`)} alt="helpProduct"/>
              </div>
              <p className="help__content--title">{item.title}</p>
            </div>
          ))}
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;