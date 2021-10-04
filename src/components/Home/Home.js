import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import banner from "../../Images/banner.jpg"
import './Home.css';

const Home = () => {
    return (


        // banner section

    <Row className="home">
            <Col >
            <h1>SKILL<span>O </span></h1>
            <p>SKILLO is an American massive open online course provider founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller. Coursera works with universities and other organizations to offer online courses</p>
            <Button variant="warning">Know more</Button>{' '}
            
            </Col>
            <Col >
            
            <img className="image" src={banner} alt="" />
            </Col>
   
  </Row>


//Service section

    );
};

export default Home;