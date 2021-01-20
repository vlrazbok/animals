import React, { Component} from 'react'
import { Link } from 'react-router-dom';

import './header-menu.sass'
import logo from './header-logo.png'

export default class HeaderMenu extends Component {

  state = {
    showSideMenu: false
  }

  hideSideMenu(){
    this.setState({
      showSideMenu:false
    })
  }

  render(){
    const { showSideMenu } = this.state;

    const mainMenu = !showSideMenu ? <MainMenu /> : null;
    const sideMenu = showSideMenu ? <SideMenu /> : null;

    return(
      <div className="headerMenu">
        <div className="headerMenu__inner">
          <div className="container">
            <div className="logo"><Link className="logo__link" to="/">
              <img className="logo__link-img" src={logo} alt="logo"/></Link>
            </div>
            {mainMenu}
            <button className="menu__btn-toggle"
            onClick={() => this.setState({showSideMenu: true})}></button>
          </div> 
        </div>
        {sideMenu}
      </div>
    );  
  };

}

const MainMenu = () => {
  return(
    <nav className="headerMenu__menu--main">
        <Link className="menu__list-item" to="/">About the shelter</Link>
        <Link className="menu__list-item" to="/pets">Our pets</Link>
        <Link className="menu__list-item" to="/help">To help the shelter</Link>
        <Link className="menu__list-item" to="/contacts">Contacts</Link>
    </nav>  
  )
}

const SideMenu = () => {
  return(
    <div  className="layer">
      <div className="headerMenu__side-menu ">
        <div className="logo"><Link className="logo__link" to="/">
              <img className="logo__link-img" src={logo} alt="logo"/></Link>
        </div>
        <nav className="headerMenu__menu--side">
          <Link className="menu__list-item" to="/">About the shelter</Link>
          <Link className="menu__list-item" to="/pets">Our pets</Link>
          <Link className="menu__list-item" to="/help">To help the shelter</Link>
          <Link className="menu__list-item" to="/contacts">Contacts</Link>
        </nav>
      </div>
    </div> 
  )
}