import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StyleWrapper } from "./NavBar.styled";
import { Link } from "react-scroll";
import logo from "../../assets/S_icon.jpg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggleClass] = useState("navbar-light");

  return (
    <StyleWrapper>
      <Navbar
        collapseOnSelect={true}
        expand="md"
        fixed="top"
        expanded={isNavOpen}
        onToggle={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-170}
              duration={100}
              id="text"
              onClick={() => {
                if (isNavOpen) setIsNavOpen(!isNavOpen);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="logo"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Home"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={toggleClass}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Skills
              </Link>

              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Experience
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Projects
              </Link>

              <Link
                to="connect"
                spy={true}
                smooth={true}
                offset={-300}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Contact
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyleWrapper>
  );
};

export default NavBar;
