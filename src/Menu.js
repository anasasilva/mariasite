import React from 'react';
import './Menu.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

import { Container, Col, Row } from 'react-bootstrap';

function Menu() {

  return (
    <div className="Menu">
      <div className="scndHeader">
        <h1 className="title">Maria Sá Silva</h1>
      </div>
      <div className="imgFooter">
        <a href="mailto:mariasasousa@hotmail.com" className="black"><EmailIcon className="noRightPadding socialIcon"/></a>
        <a href="http://www.instagram.com/yourusername" className="black"><InstagramIcon className="socialIcon"/></a>
        <a href="https://www.facebook.com/maria.sasilva.98" className="black"><FacebookIcon className="socialIcon"/></a>
      </div>
    </div>
  );
}

export default Menu;
