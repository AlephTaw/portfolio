import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const HorizNav = () => (
<div>
      {/* <h2>Coronavirus Tutoring Initiative</h2> */}
  <Navbar static="top" expand="sm" bg="white">
    <Navbar.Brand href="#">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      </Nav>
      <Nav>
        <Nav.Link href="#deets">
            About
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
</div>
);




export default HorizNav;