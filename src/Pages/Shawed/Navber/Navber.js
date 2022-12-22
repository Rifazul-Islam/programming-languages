import React, {  useContext, useState } from 'react';
import { Button, Image,  } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../router/AuthProvider/AuthProvider';

 import imges from '../images/logo.png.png';
const Navber = () => {
    const [open,setOpen] = useState(false)
    const {user,logOut} = useContext(AuthContext)
     
  
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
            <Link to='/' className='text-decoration-none fs-5 text me-3 text-white'> Home</Link>
              <Link to='/courses' className='text-decoration-none fs-5 text me-3 text-white'> Courses</Link>
              <Link to='/faq' className='text-decoration-none fs-5 text me-3 text-white' > FAQ</Link>
              <Link to = '/blog' className='text-decoration-none fs-5 text text-white me-3 '> Blog</Link>
              <Link className='text-decoration-none fs-5 text text-primary me-3' onClick={()=> setOpen(!open)} ><span>{open? 'dark' : 'light'} </span> </Link>
              
              {user?.email? 
            
                 <> 
               
                  <Image

                 roundedCircle
                style={{width:'40px'}}
                title ={user?.displayName}
                src={user?.photoURL}
               
                >
              
            </Image> 
            
            <Link onClick={logOut}  className='text-decoration-none fs-5 text text-white me-3 '>logout</Link>
            </>
               
                      
             : <Link to = '/login' className='text-decoration-none fs-5 text text-white'>Login</Link>

            }




                  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;