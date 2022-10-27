import React, { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { ArrowDownIcon } from '@heroicons/react/24/solid'

const Details = () => {
    const details = useLoaderData()
        
        const  {id,img, name, discripetion} = details;
        const componentRef = useRef();
        const reactPdfPrint = useReactToPrint({
          content: () => componentRef.current,
          documentTitle: "CourseDetails",
          onafterprint: () => alert("Print Success"),
        });

    return (
        
         <Container className='mt-5' > 
           <div  className=' d-flex justify-content-end mb-3 '>
           <Button  onClick={reactPdfPrint}> <span > <  ArrowDownIcon style={{ height:'20px',  }} /> </span>  Download</Button>
           </div>
         <Row>
    
      <Col lg="8" sm="12 "  className='mx-auto' ref={componentRef}
         style={{ width:'80%', height: window.innerHeight }} > 
    
      
      <div>
          <div>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {name} </h5>
    <p className="card-text">  {discripetion} </p>
    <Link to={`/checkout/${id}`} className="btn btn-primary">Get premium access</Link>
  </div>
</div>
        </div>
      
     </Col>
    </Row>
    
    </Container>
    );
};

export default Details;