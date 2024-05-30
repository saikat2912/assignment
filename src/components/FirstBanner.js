import React,{useState} from "react";
import { MDBBtn,MDBTypography } from 'mdb-react-ui-kit';

function FirstBanner(){
    return(
        <div className='grid first-banner'>
        <div className='g-col-6 first'>
        <MDBTypography tag='h1'>STEMing Success</MDBTypography>
           
            <div>Advanced and AP Courses in Computer Science,AI,cybersecurity,and more</div>
            <div><MDBBtn className='me-1' color='warning'>
        EXPORE OUR CURRICULUM
      </MDBBtn></div>
        </div>
        <div className='g-col-6'></div>
        
      </div>
    )
}

export default FirstBanner;