import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const [checked , setChecked] = useState(false)

  const hadlar = () =>{

       setChecked(true)
  }


    const haddlarSummit = (event) =>{
          event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(name,photoURL,email,password)
            
    }


    return (
        <div className='w-50 mx-auto mt-5'  style={{height:'450px', width:'500px', backgroundColor:'gray'}}>
              <Form onSubmit={haddlarSummit} className='w-35'  >
         <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicphoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="photoURL" name="photoURL" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={hadlar} type="checkbox"  label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!checked} >
         Register
        </Button>
      </Form>
        </div>
    );
};

export default Register;