import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './pets-list.sass'

import data from '../../data.json'

export default class PetsList extends Component{
  render(){
    
    return(
      <div className="petList">
        <div className="container">
          <div className="petList__inner">
            <h2 className="petList__title title">Our friends who<br/>
                                                  are looking for a house</h2>
            
            <div className="petList__items" >
               {data.map((item, idx) => (
              <div className="petList__item" key={idx}>
                <div className="petList__img">
                  <img src={require(`../../petImg/${item.title}.png`)} alt="pet" />
                </div>
                <p className="petList__title--item">{item.title}</p>
                {/* <button className="petList__button button" onClick={console.log(item)} >Learn More</button> */}
                <Link className="petList__button button" to={`/pet/${idx}`}>Learn More</Link>
              </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    );
  };
};
