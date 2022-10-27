import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = ({coures}) => {
   
     const {img,name,discripetion,price,id} = coures
     
     
    return (
        
 <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> {name} </h5>
        <p className="card-text"> {discripetion?.length >200? discripetion.slice(0,200) + '...'
        
        : discripetion
                       
    } 
     </p>
        <p className="card-text">
            <small className=""> <span> Price only  ${price} </span> </small> 
              <Link to={`/details/${id}`} >
             <Button className='ms-5' variant="primary">details 
             </Button></Link>  </p>
      </div>
    </div>
  </div>
</div>
       
    );
};

export default Card;