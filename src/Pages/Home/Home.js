import React from 'react';
import { Card,  Col,  Container, Row } from 'react-bootstrap';



const Home = () => {
    return (
     
        <Container>
       

              <Row className='mt-3'>
                
                <Col>
               
                <Card  style={{height:'300px', border:'none'}} >
      <Card.Img src="https://contentstatic.timesjobs.com/img/82332980/Master.jpg" alt="Card image" /> 
      <Card.ImgOverlay>
        
        
        
      </Card.ImgOverlay>
    </Card>
                </Col>
          
                    
              </Row>
        </Container>
    );
};

export default Home;