import React,{useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,


  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  
  MDBIcon,
  MDBRow,
  MDBCol, 
  MDBNavbarNav
} from 'mdb-react-ui-kit';
import logo from "../assets/logo.png";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href="#" className="p-2">
              <img src={logo} alt="Logo" />
            </MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
        <MDBNavbarToggler
              aria-label="Toggle navigation"
              onClick={() => setShowNav(!showNav)}
              className="float-end" // Add for proper alignment
            />
            <MDBCollapse navbar show={showNav}  className='d-flex  mb-3' >
              <MDBNavbarNav right fullWidth={true}  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <MDBNavbarItem className='navbar-items'>
              <MDBNavbarLink  aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem  className='navbar-items'>
              <MDBNavbarLink href="#">Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-items'>
              <MDBNavbarLink href="#">Courses</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-items'>
              <MDBNavbarLink href="#">FAQ</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-items'>
              <MDBNavbarLink href="#">
                Login <MDBIcon fas icon="angle-down" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-items'>
              <MDBBtn >Apply</MDBBtn>
            </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}