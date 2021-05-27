import React, { Component } from 'react';
import logo from '@images/logo.png';

class Header extends Component {
  render() {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <img src={logo} />
            <h3>Coming soon</h3>
            <hr />
            <ul className="social">
            <li key="instagram"><a href="http://instagram.com/lennathelabel"><i className="fa fa-instagram"></i></a></li>
            {/* <li key="facebook"><a href="http://facebook.com/anamnesisdx"><i className="fa fa-facebook"></i></a></li> */}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
