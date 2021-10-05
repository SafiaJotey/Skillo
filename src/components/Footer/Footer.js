
import './Footer.css';
import React from 'react';
import { Col,Row } from 'react-bootstrap';
import footerImg from "../../Images/footer.png"

const Footer = () => {
    return (
        <div>
  <Row className="footer">
    <Col >
    <div className="description" >
    <h1>SKILLO  <i class="fas fa-running"></i></h1>
     <p>SKILLO is an American massive open online course provider founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller. Coursera works with universities and other organizations to offer online courses</p>
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