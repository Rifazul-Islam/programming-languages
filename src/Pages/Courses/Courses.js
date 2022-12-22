import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../Shawed/Card/Card';
import Spenar from '../Shawed/Spenar/Spenar';

const Courses = () => {

      const [courses,setCourses] = useState([])
        const[loaded,setLoaded]=useState(true)
      useEffect(()=>{
            
          fetch('https://programming-server-site.vercel.app/courses')
          .then(res => res.json())
          .then(data =>setCourses(data))
          setLoaded(false) 
      },[])
      if(loaded){
          return <Spenar/>
      }
      
    return (
        <Container className='mt-5'> 
        <Row>
          <Col lg="9" sm="12"> 
             {
                courses.map(coures => <Card key={coures.id}  coures = {coures} ></Card> )
             }
      </Col>
           
           <Col  lg="2" sm="12 mt-3 ">

                    {
                        courses.map(coues => <div className='my-2' key ={coues.id}>
                              
                              <Link to={`/details/${coues.id}`} >  <Button className='w-100' variant="outline-info" ><p style={{fontSize:'13px'}} className ='mt-2 d-flex justify-content-center'> {coues.name} </p></Button> </Link>  
                            </div> )
                    }
          </Col>
          
        </Row>
     
       
        </Container>
    );
};

export default Courses;