import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'

function SecondBanner() {
  const accreditations = [
    { icon: icon1, text: 'Authorized by the College Board' },
    { icon: icon2, text: 'NCAA Approved' },
    { icon: icon3, text: 'UC A-G Approved' },
    { icon: icon4, text: 'Carnegie Mellon College Credits' },
    { icon: icon5, text: 'Cognia Accredited' },
  ];

  return (
    <MDBContainer className="py-5"> 
      <MDBRow className="justify-content-center">
        {accreditations.map((accreditation, index) => (
          <MDBCol key={index} md="auto" className="text-center mx-4">
            <MDBIcon fas icon={accreditation.icon} size="3x" className="mb-2" />
            <img src={accreditation.icon}/> 
            <p className="mb-0">{accreditation.text}</p>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default SecondBanner;