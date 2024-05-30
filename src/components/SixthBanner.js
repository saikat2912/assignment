import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

function SixthBanner() {
  const steps = [
    {
      number: 1,
      title: "Course Selection",
      description:
        "Collaborate with 2Sigma to identify courses that align with your academic goals.",
    },
    {
      number: 2,
      title: "MOU",
      description:
        "Sign a non-binding Memorandum of Understanding to formalize the initial collaboration.",
    },
    {
      number: 3,
      title: "Promotion",
      description:
        "Use materials provided by 2Sigma to inform and engage students about new courses.",
    },
    {
      number: 4,
      title: "Roster & Schedule",
      description:
        "Draft an enrollment roster and finalize the course schedule.",
    },
    {
      number: 5,
      title: "Classroom Coach",
      description:
        "Assign a coach to support and manage students during the course.",
    },
    {
      number: 6,
      title: "Contract + Onboarding",
      description:
        "Finalize and sign a contract to solidify the partnership. Schedule your onboarding session.",
    },
  ];

  return (
    <>
    <h2 className="text-center " style={{backgroundColor:'#FF9933'}}>Partnering With 2Sigma</h2>
    <MDBContainer className="partner-banner py-5" style={{backgroundColor:'#286BCFB2'}}>
      

      <MDBRow >
        {steps.map((step) => (
          <MDBCol md="4" key={step.number} className="text-center pt-2 mt-5" style={{border:'2px solid white'}}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </MDBCol>
        ))}
      </MDBRow>

      <div className="text-center mt-4">
        <MDBBtn className='me-1' color='warning'>GET STARTED</MDBBtn>
      </div>
    </MDBContainer>
    </>
  );
}

export default SixthBanner;