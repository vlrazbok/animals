
import React from 'react'

import './about.sass'

import pets from './about-pets.png'

const About = () => {
  return(
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <img src={pets} alt="pets" className="about__img"/>
          <div className="about__content">
            <h2 className="about__content--title title">
              About the shelter “Cozy House”
            </h2>
            <p className="about__content--text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. 
                                                      Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.</p>
            <p className="about__content--text text">Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. 
                                                      Praesent mattis nibh quis ultrices pharetra. Morbi tempus at ante sit amet tristique. 
                                                      Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, 
                                                      dignissim lorem. Sed at ligula et sem mattis gravida ac vel erat. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About