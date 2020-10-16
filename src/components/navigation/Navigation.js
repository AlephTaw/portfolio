import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/">Home</Nav.Link>
          <Nav.Link href="/#/about">About</Nav.Link>
          <NavDropdown title="Category" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#category/1">Projects</NavDropdown.Item>
            <NavDropdown.Item href="#category/2">Literature</NavDropdown.Item>
            <NavDropdown.Item href="#category/3">Resources</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation