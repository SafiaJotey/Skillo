import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import about from "../../Images/about.jpg"
import './About.css';
const About = () => {
    return (
        <Row className="about" >
            <Col >
            <img src={about} alt="" />
            </Col>
            <Col >
            <h1> We are Here To </h1>
            <h3>Help you!</h3>
            <p>SKILLO is an American massive open online course provider founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller. Coursera works with universities and other organizations to offer online courses</p>
            <p>Skillo has tremendously well-decorated two campuses with upgraded equipment. Our students are very much happy with our culture, environment and outstanding training method. We are passionate about providing good service to our students. </p>
            <Button variant="warning">See more </Button>{' '}
            
            </Col>
            
   
  </Row>
    );
};

export default About;

