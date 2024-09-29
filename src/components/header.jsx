import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import {
  FaLongArrowAltDown,
  FaBars,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";

export default function Header() {
  const navDropdownTitle = (
    <>
      Portfolio <FaLongArrowAltDown />
    </>
  );

  return (
    <div className="header-area">
      <div className="container mt-60">
        <div className="row justify-content-lg-between">
          <div className="col-lg-12 px-0">
            <div className="menu-area">
              <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className="logo-area"></div>
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
                    <ScrollLink
                      className="nav-link"
                      to="portfolio"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      Portfolios
                    </ScrollLink>
                    <NavDropdown
                      title={navDropdownTitle}
                      id="basic-nav-dropdown"
                    >
                      <ScrollLink
                        className="dropdown-item"
                        to="portfolio"
                        smooth={true}
                        duration={2000}
                        activeClass="active"
                        spy={false}
                        offset={5}
                      >
                        Eller så kanske
                      </ScrollLink>
                    </NavDropdown>
                    <ScrollLink
                      className="nav-link"
                      to="contact"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      Contact
                    </ScrollLink>
                    <ul className="mb-0 menu-social pl-15">
                      <li className="list-inline-item menu-border">
                        <a href="https://github.com/sebastianswahn">
                          <i>
                            <FaGithub />
                          </i>
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a href="www.linkedin.com/in/sebastian-swahn-31273a298">
                          <i>
                            <FaLinkedin />
                          </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:sebbe.swahn@hotmail.se">
                          <i>
                            <FaEnvelope />
                          </i>
                        </a>
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
