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
import {Account} from "assets/util/auth/AuthAccount";
import {useNavigate} from "react-router-dom";
import {regular} from "../../assets/util/RegularExpression";

const Register = () => {
  const mainRef = useRef(null);
  const navigate = useNavigate();
  const [userConsent, setUserConsent] = useState(true);
  const [warning, setWarning] = useState("");
  const [userData, setUserData] = useState({
    ui_student_no: "",
    ui_group: "",
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
    if (!userData.ui_student_no || !regular.studentNo(userData.ui_student_no)) {
      setWarning("학번");
      return;
    } else if (!userData.ui_group) {
      setWarning("신분");
      return;
    } else if (!userData.ui_name) {
      setWarning("이름");
      return;
    } else if (!userData.ui_birth) {
      setWarning("생년월일");
      return;
    } else if (!userData.ui_email || !regular.email(userData.ui_email)) {
      setWarning("이메일");
      return;
    } else if (!userData.ui_phone_no || !regular.phoneNo(userData.ui_phone_no)) {
      setWarning("휴대폰 번호");
      return;
    } else if (!userData.ui_pw || !regular.password(userData.ui_pw)) {
      setWarning("비밀번호");
      return;
    }

    Account.singUp(userData)
        .then((res) => {
          navigate(`/login/${res.data.data}`);
        })
        .catch(() => {
          setWarning("가입 정보")
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
                          {warning}이(가) 형식에 맞지 않습니다.
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
                                placeholder="학번"
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
                                <i className="ni ni-badge" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="select"
                                name="group"
                                value={userData.ui_group}
                                onChange={handleChange}
                            >
                              <option value="">신분 선택</option>
                              <option value="학부생">예비학기대상자, 학부생, 학부졸업생</option>
                              <option value="대학원생">대학원생, 대학원졸업생</option>
                              <option value="교수">교수</option>
                              <option value="직원">직원</option>
                              <option value="외부인">외부인</option>
                            </Input>
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
                                placeholder="이름"
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
                                placeholder="생년월일"
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
                                placeholder="이메일"
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
                                placeholder="휴대폰 번호"
                                type="text"
                                name="phone_no"
                                value={userData.ui_phone_no}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            ※ 비밀번호의 길이는 10 ~ 20글자 및 영문,  숫자, 특수문자(@, #, $, %, ^, &, !)의 조합을 사용해야 합니다.
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
                                placeholder="비밀번호"
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
