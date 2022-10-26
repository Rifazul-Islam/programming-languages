import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const  items = useLoaderData();
       
    
      const {name,img} =items

         const [resive, setResive] = useState(false)

         const handlar = ()=>{
            setResive(true)
              toast.success( 'WelCome my dear sir...',  resive)
         }
    return (
               
    <div>
    <Container className='mt-5'> 
 <Row>

<Col lg="8" sm="12 "  className='mx-auto' > 

<div>
<div className="card" >
<img src={img} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{name}</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

</div>
<Link  onClick={handlar} className="btn btn-primary">Go some</Link>
</div> 
</div>
</Col>
</Row>

</Container>
</div>
    );
};

export default Checkout;