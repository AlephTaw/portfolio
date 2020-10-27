import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import sevenBridges from '../../public/img/sevenbridges.png';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Brand href="/"><img src={sevenBridges} alt="" style={{width:"20px"}}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/">Home</Nav.Link>
          <Nav.Link href="/#/about">About</Nav.Link>
          <Nav.Link href="/#/Timeline">Timeline</Nav.Link>
          <NavDropdown title="Category" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#/projects/ePE2T0C8xy0cz5l2DIZd">Projects</NavDropdown.Item>
            <NavDropdown.Item href="#/papers/923llnJp4ulNhQVNi8yc">Literature</NavDropdown.Item>
            <NavDropdown.Item href="#/research/IA7kSuz8a0CpJjqpJ60n">Resources</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation