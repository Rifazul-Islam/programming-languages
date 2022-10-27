import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../router/AuthProvider/AuthProvider';

const Register = () => {

    const [checked , setChecked] = useState(false)

    const {haddlarCreateUser, creatProfile} = useContext(AuthContext)

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


       

        haddlarCreateUser(email,password)
        .then((result)=>{

              const user = result.user;
              console.log(user)
              handlarProfileUpdate(name,photoURL)
              form.reset()
             
        })

        .catch((error)=>{
          console.error(error)
        })
            
    }

    const handlarProfileUpdate = (name,photoURL) =>{

          const profile ={

            displayName:name,
            photoURL:photoURL,
           
          }

         return creatProfile(profile)
        
    }

    return (
       

<Container className='mt-5'> 
<Row >

  <Col lg="8" sm="12 "  className='ms-5 w-50' style={{height:'450px', backgroundColor:'gray'}} > 
  
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

</Col>
   
   <Col lg="4" sm="12 mt-3">

        <img className='h-75 '  src='https://media.istockphoto.com/vectors/search-social-personal-profile-vector-illustration-vector-id1129247141?k=20&m=1129247141&s=612x612&w=0&h=X7B8ejkB7FMJZHGphHXbHqXRoQPLxxYfbSlxO3jMvHU=' alt=''/> 
  </Col>

</Row>

</Container>


    );
};

export default Register;