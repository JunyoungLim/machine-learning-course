import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import FadeIn from "react-fade-in";

class HeaderLinks extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop={true}>
        <FadeIn transitionDuration={1000}>
          <div>
            <Navbar.Header>
              <a href=".">
              <Navbar.Brand>
                <img src="cds-logo.png" alt="CDS Edu Logo" />
              </Navbar.Brand>
              </a>
              <Navbar.Brand>
              <a href=".">CDS Education</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem>
                  <NavLink
                    to="/started"
                    className="nav-link"
                    activeClassName="active">
                    Getting Started
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/schedule"
                    className="nav-link"
                    activeClassName="active">
                    Schedule
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/syllabus"
                    className="nav-link"
                    activeClassName="active">
                    Syllabus
                  </NavLink>
                </NavItem>
                <NavDropdown eventKey={3} title="Resources" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="/tutorial">Tutorial</MenuItem>
                  <MenuItem eventKey={3.2} href="https://cmsx.cs.cornell.edu/" target="_blank" rel="noopener noreferrer">CMS</MenuItem>
                  <MenuItem eventKey={3.3} href="https://piazza.com/" target="_blank" rel="noopener noreferrer">Piazza</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="https://cornelldata.science/">
                  Cornell Data Science
                </NavItem>
              </Nav>
            </Navbar.Collapse>  
          </div>
        </FadeIn>
      </Navbar>
    );
  }
}

export default HeaderLinks;