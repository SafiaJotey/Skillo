import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
        </Card.Body>
      </Card>
    </Col>
    );
};

export default AllServices;