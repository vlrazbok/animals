import React from 'react'

import HeaderContent from '../header-content'
import About from '../about'
import Friends from '../friends'
import Help from '../help'
import Donation from '../donation'


const MainPage = () => {
  return (
        <React.Fragment>
          <HeaderContent />
          <About />
          <Friends />
          <Help />
          <Donation />
          
        </React.Fragment>
        
  );
};

export default MainPage