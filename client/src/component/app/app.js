import React, { Component } from 'react'


import HeaderMenu from '../header-menu'
import Footer from '../footer/footer'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import { MainPage, PetsPage, HelpPage, ContactsPage, PetPage } from '../pages'

import './app.sass'

export default class App extends Component{

  render(){
    return(
      <Router>
        <div className="wrapper">
          <HeaderMenu />  
          <Route path="/" component={MainPage} exact/>        
          <Route path="/pets" exact component={PetsPage} />  
          <Route path="/pet/:petId" component={PetPage} />        
          <Route path="/help" component={HelpPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Footer />   
        </div>
      </Router>
      
    )
  }
}