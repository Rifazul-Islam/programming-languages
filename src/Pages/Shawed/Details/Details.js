import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
        
        const  {img, name, discripetion} = details;

    return (
        <div>
          <div className="card mt-5 mx-auto" style={{width:'600px'}} >
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {name} </h5>
    <p className="card-text">  {discripetion} </p>
    <Link className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
    );
};

export default Details;