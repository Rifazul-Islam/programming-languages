import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Shawed/Card/Card';

const Courses = () => {

      const [courses,setCourses] = useState([])
          console.log(courses)
      useEffect(()=>{
              
          fetch('http://localhost:5000/courses')
          .then(res => res.json())
          .then(data =>setCourses(data))
          
      },[])
      
    return (
        <Container className='mt-5'> 
        <Row>
          <Col lg="9" sm="12"> 
             {
                courses.map(coures => <Card key={coures.id}  coures = {coures} ></Card> )
             }
      </Col>
           
           <Col lg="2" sm="12 mt-3">

                
          </Col>
          
        </Row>
     
       
        </Container>
    );
};

export default Courses;