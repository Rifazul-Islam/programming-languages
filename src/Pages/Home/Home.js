import React from 'react';
import { Card,  Col,  Container, Row } from 'react-bootstrap';



const Home = () => {
    return (
     
        <Container>
       

              <Row className='mt-3'>
                
                <Col>
               
                <Card  style={{MaxHeight:'300px', border:'none'}} >
      <Card.Img src="https://www.rasmussen.edu/-/media/images/blogs/school-of-technology/whichprogramminglanguage_banner.jpg?la=en&hash=A475F6308BA982CC34A3E52C4EDDDC1C9AC2D1B8" alt="Card image" /> 
      <Card.ImgOverlay>
        
        
        
      </Card.ImgOverlay>
    </Card>
                </Col>
          
                    
              </Row>
        </Container>
    );
};

export default Home;