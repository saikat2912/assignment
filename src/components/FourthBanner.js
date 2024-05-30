import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Courses from "./atoms/Courses.js";

import courseimg from "../assets/course.png";
import completion from "../assets/completion.png"

function FourthBanner() {


  return (
    <MDBContainer className="py-5 course-banner">
        <Courses/>
      <MDBRow>
        <MDBCol md="6">
          <img src={courseimg}/>
        </MDBCol>

        <MDBCol md="6">
         <img src={completion}/>
        </MDBCol>
      </MDBRow>

     
    </MDBContainer>
  );
}

export default FourthBanner;