import './Header.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className="headerArea" collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand className="logo" href="#home">
      SKILLO  <i class="fas fa-running"></i>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto ">
    <NavLink to="/home" activeStyle={{fontWeight: "bold",color: "#1FC58E"}} className="link">HOME</NavLink>
    <NavLink to="/about" activeStyle={{fontWeight: "bold",color: "#1FC58E"}}  className="link">ABOUT</NavLink>
    <NavLink to="/allServices" activeStyle={{fontWeight: "bold",color: "#1FC58E"}}  className="link">SERVICE</NavLink>
    <NavLink to="/enroll" activeStyle={{fontWeight: "bold",color: "#1FC58E"}}  className="link">ENROLL</NavLink>
     
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;