import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'gatsby';
const header = (props) =>(
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Gatsby Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link  as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link  as={Link} to="/contact">Contact Us </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <h1>{props.title}</h1>
  </div>  
    
)


export default header;