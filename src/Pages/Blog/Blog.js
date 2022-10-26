import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
       
         <Container>
             <Row>
                <Col>
                <div className="card mt-5  " style={{ backgroundColor:'#E8F6F3 '}} >
         <div className="row g-0">
        <div className="card-body">
        <h5 className="card-title"> 1. What is  Cors ..?</h5>
        <p className="card-text" style={{fontSize:'19px'}}>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that prefligh.</p>
     
      </div>
    </div>
  </div>

                





<div className="card mt-5  " style={{ backgroundColor:'#E8F6F3 '}} >
      <div className="row g-0">
      <div className="card-body">
        <h5 className="card-title"> 2. Why are you using firebase? What other options do you have to implement authentication..?</h5>
        <p className="card-text" style={{fontSize:'19px'}}>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
     
      </div>
    </div>
  </div>

           


<div className="card mt-5  " style={{ backgroundColor:'#E8F6F3 '}} >
      <div className="row g-0">
    
      <div className="card-body">
        <h5 className="card-title"> 3. How does the private route work? ..?</h5>
        <p className="card-text" style={{fontSize:'19px'}}> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
     
      </div>
    </div>
  </div>

           



<div className="card mt-5  " style={{ backgroundColor:'#E8F6F3 '}} >
      <div className="row g-0">
    
      <div className="card-body">
        <h5 className="card-title"> 1.What is Node? How does Node work ..?</h5>
        <p className="card-text" style={{fontSize:'19px'}}>Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
     
      </div>
    </div>
  </div>

  </Col>
   </Row>
    </Container>
    );
};

export default Blog;