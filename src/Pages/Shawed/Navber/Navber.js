import React, {  useState } from 'react';
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

 import imges from '../images/logo.png.png';
const Navber = () => {
    const [open,setOpen] = useState(false)

  
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img style={{width:'40px'}} src={imges} alt=''/>   Learning Programming
       
          </Navbar.Brand>
           
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              
              <Link to='/courses' className='text-decoration-none fs-5 text me-3 text-white'> Courses</Link>
              <Link  className='text-decoration-none fs-5 text me-3 text-white' > FAQ</Link>
              <Link to = '/blog' className='text-decoration-none fs-5 text text-white me-3 ' > Blog</Link>

              <Link to = '/login' className='text-decoration-none fs-5 text text-white ' >Login</Link>
              
            
             <Button onClick={()=> setOpen(!open)}  variant="dark"><span>{open? 'dark' : 'light'} </span> </Button>
                 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;