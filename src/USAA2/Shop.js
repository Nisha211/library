import React, { useState, useEffect,setState,handleClick } from 'react';
import { Form,Col,Row} from 'react-bootstrap';


function Shop() {
    
    return (
        <div className="forms">
            <h1>FORM</h1>
            <Form>
            <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>LastName</Form.Label>
      <Form.Control type="password" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select State</Form.Label>
    <Form.Control as="select">
      <option>Tamilnadu</option>
      <option>Kerala</option>
      <option>Andhra</option>
      <option>Karnataka</option>
      <option>Delhi</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select courses</Form.Label>
    <Form.Control as="select" multiple>
      <option>HTML</option>
      <option>CSS</option>
      <option>React</option>
      <option>Bootstrap</option>
      <option>Material-UI</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Feedback</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

<Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control type="range" />
  </Form.Group>

  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Ranking
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="First Grade"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Second Grade"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Third Grade"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  


        </div>
      
        
    );
}
export default Shop;