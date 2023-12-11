import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import {Cookies} from "react-cookie";

const BasicNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  // const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const logout = async () => {
    new Cookies().remove("access_token", { path: "/" });
    window.location.replace("/");
  }

  return (
      <>
        <header className="header-global">
          <Navbar
              className="navbar-main navbar-transparent navbar-light headroom"
              expand="lg"
              id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                    alt="..."
                    src={require("assets/img/brand/young-hana-logo-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                  toggler="#navbar_global"
                  navbar
                  className={collapseClasses}
                  onExiting={onExiting}
                  onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                            alt="..."
                            src={require("assets/img/brand/young-hana-logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">게시판</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/board/1" tag={Link}>
                        <div>
                          <i className="fa fa-bell" />
                          <span className="nav-link-inner--text d-lg-none ml-2 text-dark">
                            공지사항
                          </span>
                        </div>
                      </DropdownItem>
                      <DropdownItem to="/board/2" tag={Link}>
                        <div>
                          <i className="fa fa-question" />
                          <span className="nav-link-inner--text d-lg-none ml-2 text-dark">
                            질문
                          </span>
                        </div>
                      </DropdownItem>
                      <DropdownItem to="/board/3" tag={Link}>
                        <div>
                          <i className="fa fa-space-shuttle" />
                          <span className="nav-link-inner--text d-lg-none ml-2 text-dark">
                            자유
                          </span>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                        className="nav-link-icon"
                        id="tooltip112445449"
                        onClick={logout}
                        style={{"cursor": "pointer"}}
                    >
                      <i className="fa fa-sign-out" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        로그아웃
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      로그아웃
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
  );
};

export default BasicNavbar;
