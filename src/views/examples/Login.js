import React, {useEffect, useRef, useState} from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, UncontrolledAlert, Alert,
} from "reactstrap";
import BasicFooter from "components/Footers/BasicFooter.js";
import {Link, useParams} from "react-router-dom";
import {Account} from "../../assets/util/auth/AuthAccount";
import {Cookies} from "react-cookie";
import {regular} from "../../assets/util/RegularExpression";

const Login = () => {
  const mainRef = useRef(null);
  const { student_no } = useParams();
  const [warning, setWarning] = useState("");
  const [account, setAccount] = useState({
    ui_student_no: student_no || "",
    ui_pw: ""
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [mainRef]);

  const loginSubmit = () => {
    if (account.ui_student_no === "" || !regular.studentNo(account.ui_student_no)) {
      setWarning("학번");
      return;
    } else if (account.ui_pw === "" || !regular.password(account.ui_pw)) {
      setWarning("비밀번호");
      return;
    }

    Account.singIn(account)
        .then((res) => {
          new Cookies().set("access_token", res.data.data, { path: "/" });
          window.location.replace("/");
        })
        .catch(() => {
          setWarning("Account");
        });
  }

  const handleChange = (e) => {
    setAccount({
      ...account,
      ["ui_" + e.target.name]: e.target.value
    })
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
                      {student_no !== null && student_no !== "" && student_no !== undefined ?
                          <UncontrolledAlert color="success" fade={false}>
                            <span className="alert-inner--icon">
                              <i className="ni ni-like-2" />
                            </span>{" "}
                            <span className="alert-inner--text">
                              <strong>축하합니다!</strong> 가입을 성공하셨습니다!
                            </span>
                          </UncontrolledAlert>
                      :
                      <></>}
                      <Alert color="danger" isOpen={warning !== ""} toggle={() => {setWarning("")}}>
                        <span className="alert-inner--text">
                          {warning}이(가) 형식에 맞지 않습니다.
                        </span>
                      </Alert>
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="학번"
                                type="text"
                                name="student_no"
                                value={account.ui_student_no}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
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
                                value={account.ui_pw}
                                onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                              className="my-4"
                              color="primary"
                              type="button"
                              onClick={loginSubmit}
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col className="text-left" xs="6">
                      <Link to="/register">
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <BasicFooter />
      </>
  );
};

export default Login;
