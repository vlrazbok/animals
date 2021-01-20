import React from 'react'

import data from '../../data.json'


import './pet-details.sass'

const PetPage = ({ match }) => {
  const {
    params: { petId }
  } = match;

  return (
  
      <div className="details">
          <div className="container">
            <div className="details__inner">
              
              <div className="details__content">
                <div className="details__img">

                  <img src={ require(`../../petImg/Charly.png`)} alt="modal img"/>
                </div>
                <div className="details__information">
                  <h3 className="details__title title">{data[petId].title}</h3>
                  <h4 className="details__breed">{data[petId].breed}</h4>
                  <p className="details__desc">{data[petId].desc}</p>
                  <ul className="details__list">
                    <li className="details__list--items">Age: {data[petId].age}</li>
                    <li className="details__list--items">Incoculations: {data[petId].inoculations}</li>
                    <li className="details__list--items">Deseases: {data[petId].diseases}</li>
                    <li className="details__list--items">Parasites: {data[petId].parasites}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default PetPage