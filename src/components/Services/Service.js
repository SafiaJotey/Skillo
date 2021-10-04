import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const{Course,Img,price}=props.course;
    return (
           
        <Col md={3}>
      <Card className="card">
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>Course Name: {Course}</Card.Title>
          <Card.Text>
            Price: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;