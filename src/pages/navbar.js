import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Thing = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Shop History</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Shop by Era" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/Neolithic">Stone age</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Bronze">Bronze age</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Iron">Iron age</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Roman">Roman age</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Medieval">Medieval era</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Renaissance">The Renaissance </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shop by Catagory" id="collasible-nav-dropdown">
          <NavDropdown.Item>
              <Link to="/Archery">Archery</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Armor">Armor </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Swords">Swords </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Shields">Shields</Link>
            </NavDropdown.Item>
          </NavDropdown>{" "}
          <Nav>
            <Nav.Link>
              <Link to="/About">About us</Link>
            </Nav.Link>
          </Nav>
        </Nav>

        <Nav>
          <Nav.Link to="/Cart">
            <Link to="/Cart">
              <i className="fa fa-shopping-cart" aria-hidden="true">
                <br /> 
                My cart
              </i>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
