import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "reactstrap";

const CommunityBoardContent = (props) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        switch(props.topic) {
            case '1':
                setTitle("공지사항");
                break;
            case '2':
                setTitle("질문 게시판");
                break;
            case '3':
                setTitle("자유 게시판");
                break;
            default:
                setTitle("비정상적인 접근");
                break;
        }
    }, [props.topic])

    return (
        <>
            <div className="position-relative">
                {/* IndexContent for FREE version */}
                <section className="section section-hero section-shaped">
                    {/* Background circles */}
                    <div className="shape shape-style-1 shape-default">
                        <span className="span-150" />
                        <span className="span-50" />
                        <span className="span-50" />
                        <span className="span-75" />
                        <span className="span-100" />
                        <span className="span-75" />
                        <span className="span-50" />
                        <span className="span-100" />
                        <span className="span-50" />
                        <span className="span-100" />
                    </div>
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center" lg="6">
                                    <h1 className="text-white">
                                        {title}
                                    </h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CommunityBoardContent;
