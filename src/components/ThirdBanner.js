import React from "react";
import { MDBTypography } from 'mdb-react-ui-kit';
import {
    MDBContainer, MDBRow, MDBCol ,MDBIcon
  } from 'mdb-react-ui-kit';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


function ThirdBanner() {
  const problems = [
    {
      title: 'Thousands of teacher jobs in STEM went unfilled with record-high turnover.',
      icon: img1, 
    },
    {
      title: 'Less than 5% of high school graduates are computationally fluent.',
      icon: img2,
    },
    {
      title: 'Career-oriented math learning opportunities remain underutilized.',
      icon: img3,
    },
  ];

  return (
    <MDBContainer className="my-5 third">
      <h2 className="text-center mb-2">The Problems We Address</h2>
      <MDBRow>
        {problems.map((problem, index) => (
          <MDBCol md="4" key={index} className="text-center card-layout">
            
            <img src={problem.icon} size="4x" className="mb-3"/>
            <p>{problem.title}</p>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default ThirdBanner;

