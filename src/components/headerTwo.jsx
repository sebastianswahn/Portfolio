import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaBars, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
export default function HeaderTwo() {
  const navDropdownTitle = (
    <>
      alternativ <FaLongArrowAltDown />
    </>
  );

  return (
    <div className="header-area">
      <div className="container mt-60">
        <div className="row justify-content-lg-between">
          <div className="col-lg-12 px-0">
            <div className="menu-area">
              <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className="logo-area">
                  <ReactLink to="/">// insert a logo here </ReactLink>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <i className="text-white">
                    <FaBars />
                  </i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto align-items-center">
                    <ReactLink to="/" className="nav-link">
                      Home
                    </ReactLink>
                    <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                    <NavDropdown
                      title={navDropdownTitle}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">
                        portfolioalternativ2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/blog_details">
                        projektdetaljer
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/#contact">Contact</Nav.Link>
                    <ul className="mb-0 menu-social pl-15">
                      <li className="list-inline-item menu-border">
                        <Nav.Link href="mailto:sebbe.swahn@hotmail.se">
                          <i>
                            <FaEnvelope />
                          </i>
                        </Nav.Link>
                      </li>
                      <li className="list-inline-item">
                        <Nav.Link href="www.linkedin.com/in/sebastian-swahn-31273a298">
                          <i>
                            <FaLinkedin />
                          </i>
                        </Nav.Link>
                      </li>
                      <li className="list-inline-item">
                        <Nav.Link href="https://github.com/sebastianswahn">
                          <i>
                            <FaGithub />
                          </i>
                        </Nav.Link>
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
