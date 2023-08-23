import React, {useEffect, useRef, useState} from "react";
import {
  Button,
  Card,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, CardHeader, CardBody, Alert
} from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { createAccount } from "assets/util/auth/axiosAccount";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const [userConsent, setUserConsent] = useState(true);
  const [warning, setWarning] = useState("");
  const [userData, setUserData] = useState({
    ui_student_no: "",
    ui_name: "",
    ui_birth: "",
    ui_email: "",
    ui_phone_no: "",
    ui_pw: ""
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [mainRef]);

  const createAccountSubmit = () => {
    if (userData.ui_student_no === "" || !(/^[0-9]{9}$/.test(userData.ui_student_no))) {
      setWarning("Student ID");
      return;
    } else if (userData.ui_name === "") {
      setWarning("Name");
      return;
    } else if (userData.ui_birth === "") {
      setWarning("Birth");
      return;
    } else if (userData.ui_email === "" || !(/^[a-z0-9]+@[a-z]+(\.([a-z]{2,3}))?\.[a-z]{2,3}$/.test(userData.ui_email))) {
      setWarning("Email");
      return;
    } else if (userData.ui_phone_no === "" || !(/^010([0-9]{4})([0-9]{4})$/.test(userData.ui_phone_no))) {
      setWarning("Phone No");
      return;
    } else if (userData.ui_pw === "" || !(/^[a-z0-9{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]{10,20}$/.test(userData.ui_pw))) {
      setWarning("Password");
      return;
    }

    createAccount(userData)
        .then((res) => {
          navigate(`/login/${res.data}`);
        })
        .catch(() => {
          setWarning("User Data")
        });
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      ["ui_" + e.target.name]: e.target.value
    });
  }

  return (
      <>
        <main ref={mainRef}>
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <h3 className="text-center">Welcome to Young Hana</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Alert color="danger" isOpen={warning !== ""} toggle={() => {setWarning("")}}>
                        <span className="alert-inner--text">
                          <strong>경고!</strong> {warning}이(가) 형식에 맞지 않습니다.
                        </span>
                      </Alert>
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
                      <Form role="form">
                        <div className="text-muted font-italic">
                          <small>
                            ※ 강원대학교의 학번을 사용해야 합니다.
                          </small>
                        </div>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Student ID"
                                type="text"
                                name="student_no"
                                value={userData.ui_student_no}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Name"
                                type="text"
                                name="name"
                                value={userData.ui_name}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Birth"
                                type="date"
                                name="birth"
                                value={userData.ui_birth}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={userData.ui_email}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            ※ 휴대폰 번호는 '-'를 빼고 입력해야 합니다.
                          </small>
                        </div>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Phone Number"
                                type="text"
                                name="phone_no"
                                value={userData.ui_phone_no}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            ※ 비밀번호의 길이는 10 ~ 20글자 및 영어(소문자), 숫자, 특수문자의 조합을 사용해야 합니다.
                          </small>
                        </div>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                name="pw"
                                value={userData.ui_pw}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                  className="custom-control-input"
                                  id="customCheckRegister"
                                  type="checkbox"
                                  onClick={() => {setUserConsent(!userConsent)}}
                              />
                              <label
                                  className="custom-control-label"
                                  htmlFor="customCheckRegister"
                              >
                                <span>
                                  개인정보 이용 약관 동의
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                              className="mt-4"
                              color="primary"
                              type="button"
                              onClick={createAccountSubmit}
                              disabled={userConsent}
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
  );
};

export default Register;
