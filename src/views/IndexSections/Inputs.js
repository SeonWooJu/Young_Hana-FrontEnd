import React, { useState } from "react";
import classnames from "classnames";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const Inputs = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [birthdayFocused, setBirthdayFocused] = useState(false);
  const [searchAltFocused, setSearchAltFocused] = useState(false);
  const [birthdayAltFocused, setBirthdayAltFocused] = useState(false);

  return (
      <>
        <section className="section pb-0 section-components">
          <Container className="mb-5">
            <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Form controls
              </small>
            </div>
            <Row>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input placeholder="Regular" type="text" />
                </FormGroup>
                <FormGroup
                    className={classnames({
                      focused: searchFocused,
                    })}
                >
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Search"
                        type="text"
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input disabled placeholder="Regular" type="text" />
                </FormGroup>
                <FormGroup
                    className={classnames({
                      focused: birthdayFocused,
                    })}
                >
                  <InputGroup className="mb-4">
                    <Input
                        placeholder="Birthday"
                        type="text"
                        onFocus={() => setBirthdayFocused(true)}
                        onBlur={() => setBirthdayFocused(false)}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup className="has-success">
                  <Input className="is-valid" placeholder="Success" type="text" />
                </FormGroup>
                <FormGroup className="has-danger">
                  <Input
                      className="is-invalid"
                      placeholder="Error Input"
                      type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
          <div className="py-5 bg-secondary">
            <Container>
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Form controls (alternative)
                </small>
              </div>
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input
                        className="form-control-alternative"
                        placeholder="Regular"
                        type="text"
                    />
                  </FormGroup>
                  <FormGroup
                      className={classnames({
                        focused: searchAltFocused,
                      })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                          placeholder="Search"
                          type="text"
                          onFocus={() => setSearchAltFocused(true)}
                          onBlur={() => setSearchAltFocused(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input
                        className="form-control-alternative"
                        disabled
                        placeholder="Regular"
                        type="text"
                    />
                  </FormGroup>
                  <FormGroup
                      className={classnames({
                        focused: birthdayAltFocused,
                      })}
                  >
                    <InputGroup className="input-group-alternative mb-4">
                      <Input
                          placeholder="Birthday"
                          type="text"
                          onFocus={() => setBirthdayAltFocused(true)}
                          onBlur={() => setBirthdayAltFocused(false)}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" sm="6">
                  <FormGroup className="has-success">
                    <Input
                        className="form-control-alternative is-valid"
                        placeholder="Success"
                        type="text"
                    />
                  </FormGroup>
                  <FormGroup className="has-danger">
                    <Input
                        className="form-control-alternative is-invalid"
                        placeholder="Error Input"
                        type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </>
  );
};

export default Inputs;
