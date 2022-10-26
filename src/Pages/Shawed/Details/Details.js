import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
        
        const  {id,img, name, discripetion} = details;

    return (
        
         <Container className='mt-5'> 
         <Row>
    
      <Col lg="8" sm="12 "  className='mx-auto' > 
    
      
      <div>
          <div>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {name} </h5>
    <p className="card-text">  {discripetion} </p>
    <Link to={`/cartSummary/${id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
      
     </Col>
    </Row>
    
    </Container>
    );
};

export default Details;