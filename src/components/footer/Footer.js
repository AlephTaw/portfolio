import React from 'react';
import ScrollToTop from '../navigation/ScrollToTop'
// import { Link } from 'react-router-dom';

const Footer = () => (
<div>
<footer>
  <div>
    <div className="col-xs-12 mx-auto" style={{height: "20px", "maxWidth": "600px"}}>
    <hr></hr>
    </div>
    <div className="text-center">
      Ce n'est pas un pied de page. | <ScrollToTop>Top</ScrollToTop>
    </div>
    <div className="col-xs-12" style={{height: "20px"}}></div>
  </div>
  </footer> 
</div>
);

export default Footer;