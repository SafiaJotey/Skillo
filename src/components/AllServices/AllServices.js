import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllServices = (props) => {
    const{Course,Img,price}=props.course;
    return (
        <Col md={4}>
      <Card className="card">
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>Course Name: {Course}</Card.Title>
          <Card.Text>
            Price: {price}
          </Card.Text>
          <Button variant="warning">Details</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default AllServices;