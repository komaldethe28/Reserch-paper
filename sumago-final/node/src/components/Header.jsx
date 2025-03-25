import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import p1 from '../AVCOE_LOGO.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import {
   
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <Navbar  expand="lg" className='header'>
      <Container >
        <Navbar.Brand href="/">
          {/* Replace with your logo image or text */}
          <img src={p1} alt="Logo" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/Home"  >Home</Nav.Link>
          
            <Nav.Link href="/About">About Us</Nav.Link>
            {/* <Nav.Link href="/Loginpage">Login</Nav.Link> */}
            {/* <Nav.Link href="/Registration">Register</Nav.Link> */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/Display'>Display Data </MDBDropdownItem>
                  <MDBDropdownItem link href='/Collection'>Create new record</MDBDropdownItem>
                  <MDBDropdownItem link href='/Delete'>Delete record</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <Nav.Link href="/Contactus">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 frm"
              aria-label="Search"
              
            />
          </Form>
          
        <Navbar.Brand href="/" height='70px'>
       < CgProfile href='./Login'/>
        </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;