import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class PrivateForm extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

}
