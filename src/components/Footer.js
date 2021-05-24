import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           <li key="instagram"><a href="http://instagram.com/anamnesisdx"><i className="fa fa-instagram"></i></a></li>
           <li key="facebook"><a href="http://facebook.com/anamnesisdx"><i className="fa fa-facebook"></i></a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2021 Anamnesis Dx.</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
