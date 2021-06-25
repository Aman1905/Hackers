import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/icons/logo.png";
import "./Header.css"

const Header = () => {
    return (
        <div>
        <Navbar
          fixed="top"
          expand="md"
          bg="primary"
          variant="dark"
          className="animate-navbar nav-theme justify-content-between"
        >
          {/* <div>
            <Navbar.Brand href="#home">
              <img className="logo" src={Logo} alt="" />
            </Navbar.Brand>
          </div> */}
          <div>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto active">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#about">About Us</Navbar.Brand>
                <Navbar.Brand href="#skills">Services</Navbar.Brand>
                <Navbar.Brand href="#experience">Doctors</Navbar.Brand>
                <Navbar.Brand href="#projects">Price</Navbar.Brand>
                <Navbar.Brand href="#projects">Testimonials</Navbar.Brand>
                <Navbar.Brand href="#contact">Contact</Navbar.Brand>
            
              </Nav>
            </Navbar.Collapse>
            </Container>
          </div>
        </Navbar>
      </div>
    )
}

export default Header
