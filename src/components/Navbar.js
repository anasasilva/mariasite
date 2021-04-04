import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {withTranslation, useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function CustomNavbar(props) {

  const {t, i18n} = useTranslation('all');
  let { darkNavBar } = props;

  if (darkNavBar === undefined)
    darkNavBar = true;

  if (!darkNavBar && window.innerWidth < 1200)
    darkNavBar = true;


  const handleChange = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
    localStorage.setItem('lang', language)
  };

  return (
    <Navbar className={"header " + (darkNavBar ? "black-bg" : "transparent")} id="navbar" expand="lg">
  <Navbar.Brand href="/"><h1 className="d-none d-sm-block title ">Maria Sá Silva</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className={"ml-auto " + (darkNavBar ? " white" : " black")}>
      <Nav.Link className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/"><h5 className={"text-font mb-0 my-auto " + (props.home ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.home')}</h5></Nav.Link>
      <Nav.Link className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/gallery"><h5 className={"text-font mb-0 " + (props.gallery ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.gallery')}</h5></Nav.Link>
      <Nav.Link className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/calendar"><h5 className={"text-font mb-0 " + (props.calendar ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.schedule')}</h5></Nav.Link>
      <Nav.Link className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/contacts"><h5 className={"text-font mb-0 " + (props.contacts ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.contacts')}</h5></Nav.Link>
      <NavDropdown title={<h5 className={"text-font mb-0 my-auto d-inline" + (props.home ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.language')}</h5>} id="basic-nav-dropdown">
        <NavDropdown.Item selected={i18n.language == "en"} onClick={() => handleChange("en")}><h5 className={"text-font black "}>ENG</h5></NavDropdown.Item>
        <NavDropdown.Item selected={i18n.language == "pt"} onClick={() => handleChange("pt")}><h5 className={"text-font black"}>PT</h5></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default withTranslation('all')(CustomNavbar);
