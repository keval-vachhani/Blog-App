import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
function SignIn() {
  const navigate=useNavigate();
const  navigateTohome =()=>{
    navigate("/")
}
  return (
    
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
    background:"#001c35",
    height:"100vh"
      }}
    >
      <div className="mask gradient-custom-3">
      <MDBCard className='signIN'>
        <MDBCardBody className=""style={{marginTop:"24px", height:"80%"}}>
          <h2 className="text-uppercase text-center mb-3">Create an account</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="lg"
            id="form3"
            type="password"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Repeat your password"
            size="lg"
            id="form4"
            type="password"
          />
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={navigateTohome}>
            Register
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </div>
    </MDBContainer>
    
    
  );
}

export default SignIn;
