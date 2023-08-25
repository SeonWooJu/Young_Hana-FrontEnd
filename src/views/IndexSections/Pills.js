import React, { useState } from "react";
import classnames from "classnames";
import { NavItem, NavLink, Nav, Col } from "reactstrap";

const Index = () => {
  const [circledNavPills, setCircledNavPills] = useState(1);

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setCircledNavPills(index);
  };

  return (
      <Col lg="5">
        <h3 className="h4 text-success font-weight-bold mb-5">Navigation Pills</h3>
        <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
          <NavItem>
            <NavLink
                aria-selected={circledNavPills === 1}
                className={classnames("rounded-circle", {
                  active: circledNavPills === 1,
                })}
                onClick={(e) => toggleNavs(e, 1)}
                href="#pablo"
                role="tab"
            >
            <span className="nav-link-icon d-block">
              <i className="ni ni-atom" />
            </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                aria-selected={circledNavPills === 2}
                className={classnames("rounded-circle", {
                  active: circledNavPills === 2,
                })}
                onClick={(e) => toggleNavs(e, 2)}
                href="#pablo"
                role="tab"
            >
            <span className="nav-link-icon d-block">
              <i className="ni ni-chat-round" />
            </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                aria-selected={circledNavPills === 3}
                className={classnames("rounded-circle", {
                  active: circledNavPills === 3,
                })}
                onClick={(e) => toggleNavs(e, 3)}
                href="#pablo"
                role="tab"
            >
            <span className="nav-link-icon d-block">
              <i className="ni ni-cloud-download-95" />
            </span>
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
  );
};

export default Index;
