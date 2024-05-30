import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import schooquote from '../assets/school-quote.png'

function FifthBanner() {
  return (
    <>

<MDBContainer className="py-5"> 
      <MDBRow>
        <MDBCol md="6">
          <img src={schooquote} width="500px" className="img-fluid" alt="School Quote" />
        </MDBCol>
        <MDBCol md="6">
          <MDBCard className="testimonial-card">
          <MDBCardBody>
        <MDBCardText className="text-center mb-4">
          “The students have been engaged and I can’t speak more highly of the
          professionalism of all of the staff at 2Sigma School.”
        </MDBCardText>
        <MDBCardTitle className="text-center">Erik Arnold, Principal</MDBCardTitle>
      </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
   
   
    </>
  );
}

export default FifthBanner;