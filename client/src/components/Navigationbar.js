import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigationbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >
            <img
              src="https://internship.thesparksfoundation.info/assests/img/logo.png"
              alt="Logo"
              className="img-thumbnail "
              height="60px"
              width="30px"
              style={{ backgroundColor: "transparent" }}
            />
            SPARKS BANK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-lg-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/createnewuser">
                  Create New Customer
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/customertable">
                  All Customer
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/transactionhistory">
                  Transaction History
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
