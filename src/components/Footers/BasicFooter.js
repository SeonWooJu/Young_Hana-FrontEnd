import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const BasicFooter = () => {
  return (
      <footer className="footer">
        <Container>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                      href="https://www.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};

export default BasicFooter;
