import React from "react";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

function Courses() {
  return (
    <MDBContainer className="course-banner py-5">
      <MDBTypography
        tag="h1"
        variant="h1"
        className="mb-3 text-white text-center"
      >
        A Cost-Effective Solution to Boost Your 8-12 Grade Curriculum
      </MDBTypography>

      <MDBTypography
        tag="p"
        variant="body1"
        className="lead mb-0 text-white text-center"
      >
        11 Courses, 5 Pathways including Introductory, Advanced and AP courses in
        AI, Computer Science, Data Science, Cybersecurity, and more.
      </MDBTypography>
    </MDBContainer>
  );
}

export default Courses;
