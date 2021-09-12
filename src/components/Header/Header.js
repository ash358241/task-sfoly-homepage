import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div 
    style={{position: 'sticky', 
    top: '0', 
    zIndex:'1'}}>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Springfield Olympiads</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Register</Nav.Link>
              <NavDropdown title="Olympiads" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SISO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  SIMO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  SIEO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  SICO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Grads
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Finance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link1">About Us</Nav.Link>
              <Nav.Link href="#link2">FAQ'S</Nav.Link>
              <Nav.Link href="#link3">Contact Us</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
