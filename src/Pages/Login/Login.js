import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mt-5'> 
        <Row >

          <Col lg="8" sm="12 "  className='ms-5 w-50' style={{height:'400px', backgroundColor:'gray'}} > 
          
          <Form className='w-50 ms-5 mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Login
        </Button>
          <p> if exsits not Accouts you go  <Link to='/register'> Register </Link> </p>
      </Form>
      
      </Col>
           
           <Col lg="4" sm="12 mt-3">

                <img className='h-50 ms-5'  src='https://thumbs.dreamstime.com/b/login-businesswoman-hand-pressing-virtual-button-virtual-screen-44615280.jpg' alt=''/> 
          </Col>
          
        </Row>
     
       
        </Container>
    );
};

export default Login;