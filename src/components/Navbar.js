import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function CustomNavbar(props) {

  return (
    <Navbar className="header px-5" id="navbar" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"><h1 className="d-block title ">Maria Sá Silva</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={"ml-auto "}>
          <Nav.Link className={"mr-3 "} href="/"><h5 className={"text-font mb-0 " + (props.home ? "underline" : "")}>Home</h5></Nav.Link>
          <Nav.Link className={"mr-3 "} href="/projects"><h5 className={"text-font mb-0 " + (props.contacts ? "underline" : "")}>Projects</h5></Nav.Link>
          <Nav.Link className={"mr-3 "} href="/gallery"><h5 className={"text-font mb-0 " + (props.gallery ? "underline" : "")}>Gallery</h5></Nav.Link>
          <Nav.Link href="/contacts"><h5 className={"text-font mb-0 " + (props.contacts ? "underline" : "")}>Contacts</h5></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
