import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <MDBFooter
      style={{backgroundColor:'#CEDEE7'}}
      className="text-center text-lg-start text-muted pt-5" 
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img
                  src={logo} 
                  alt="2Sigma School Logo"
                  height="30" 
                />
                <span className="ms-2">2Sigma School</span>
              </h6>
              <p>Advanced Computer Science</p>

              <p>
                <MDBIcon icon="phone" className="me-3" /> (646) 547-1361
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                3964 Rivermark Plz #227, Santa Clara, CA 95054
              </p>
              <p>
              <div
        className="text-center "
       
      >
        Advanced Placement and AP are trademarks owned by the College Board,
        which is not affiliated with, and does not endorse, this site.
        <br />
        © 2021-2024 2Sigma School Inc. All rights reserved.
      </div>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  Founding Story
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Blogs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  News
                </a>
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Privacy</h6>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Florida Disclosures
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <p>
                <a href="#!" className="text-reset">
                <span>FOLLOW US</span>
                </a>
                <a href="#!" className="text-reset">
                <div>
          <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#3b5998" }}>
            <MDBIcon fab icon="facebook-f" size="lg" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#55acee" }}>
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#dd4b39" }}>
            <MDBIcon fab icon="google" size="lg" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#ac2bac" }}>
            <MDBIcon fab icon="instagram" size="lg" />
          </MDBBtn>
        </div>
                </a>
             </p>
              <p>
            <a href="#!" className="text-reset">
            <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <MDBBtn className='me-1' color='warning'>CONTACT US</MDBBtn>
                </a>
                </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

     
    </MDBFooter>
  );
}

export default Footer;