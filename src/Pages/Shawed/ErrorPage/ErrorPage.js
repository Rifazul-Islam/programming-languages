import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouteError } from "react-router-dom";


 
const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
         <Container >
              <Row>
                <Col lg ='5' className=' mt-5 mx-auto '  style={{height:'350px',  backgroundColor:'gray'}}>
                <div id="error-page"  className='text-center mt-5'>
             <h1>Oops!</h1>
           <h1> 404 !!! </h1>
            <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
                
                
                </Col>
              </Row>
         </Container>
    );
};

export default ErrorPage;
