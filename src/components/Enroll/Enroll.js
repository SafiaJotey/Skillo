import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Enroll.css';

const Enroll = () => {
    return (
        <Form className="form">
  
  
  
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm={2}>
     Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="enter your name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Enter your Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm={2}>
      Contact No.
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Enter your contact No." />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Course You want to enroll
      </Form.Label>
      <Col sm={10}>
        <Form.Check
         
          label="Responsive Web Design"
          
        />
        <Form.Check
         
          label="Professional Web Development"
        
        />
        <Form.Check
          
          label="Android App Development"
        
        />

        <Form.Check
          
          label="UX/UI Design"
        
        />
        <Form.Check
          
          label="3D Animation"
        
        />
        <Form.Check
          
          label="Digital Marketing"
        
        />
        <Form.Check
          
          label="Python"
        
        />
        <Form.Check
          
          label="YouTube Video Makin"
        
        />
        
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className=" btn-warning"type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
    );
};

export default Enroll;