import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import HeaderMenu from '../component/header-menu'
import Footer from '../component/footer'
import { MainPage, PetsPage, HelpPage, ContactsPage, PetPage } from '../component/pages'

export const ClientPage = () => {

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