
import './Footer.css';
import React from 'react';
import { Col,Nav,Navbar,Row } from 'react-bootstrap';
import footerImg from "../../Images/footer.png"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
  <Row className="footer">

    <Col >
    <Navbar  collapseOnSelect expand="lg" >
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto  my-5">
    <NavLink to="/home" activeStyle={{fontWeight: "bold",color: "#FAE62D;"}} className="link">HOME</NavLink>
    <NavLink to="/about" activeStyle={{fontWeight: "bold",color: "#FAE62D;"}}  className="link">ABOUT</NavLink>
    <NavLink to="/allServices" activeStyle={{fontWeight: "bold",color: "#FAE62D;"}}  className="link">SERVICE</NavLink>
    <NavLink to="/enroll" activeStyle={{fontWeight: "bold",color: "#FAE62D;"}}  className="link">ENROLL</NavLink>
     
      
    </Nav>
    
  </Navbar.Collapse>

</Navbar>
    <div className="description" >
    
    <h1>SKILLO  <i class="fas fa-running"></i></h1>
     <p>SKILLO is an American massive open online course provider founded in 2012 by Stanford University computer science professors Driven Ag and Vaphne scoller. Killo works with universities and other organizations to offer online courses</p>
     <ul className="social-icon">
        <li><a href="https://twitter.com"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="https://twitter.com"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://twitter.com"><i class="fab fa-twitter-square"></i></a></li>
    </ul>
    </div>
    </Col>
    <Col>
    
    <img className="image" src={footerImg} alt="" />
    </Col>
    <hr />
    <h6> &copy;All right are reserved2021 |SafiaJotey </h6>
  </Row>
 
</div>
    );
};

export default Footer;