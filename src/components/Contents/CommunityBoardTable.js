import React, {useEffect, useState} from "react";
import {Container, Row, Col, Table, Button, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import yxios from "../../assets/util/yxios";
import {now} from "moment";
import {Link} from "react-router-dom";
import ReadBoardModal from "../modals/ReadBoardModal";
import CreateBoardModal from "../modals/CreateBoardModal";

const CommunityBoardTable = (props) => {
    const [checkAdmin, setCheckAdmin] = useState(true);
    const [boardIdx, setBoardIdx] = useState("");
    const [boardList, setBoardList] = useState([
        {
            cb_no: "",
            cb_title: "",
            writer: "",
            student_no: "",
            cb_cr_date: now().toString()
        }
    ]);
    const [start, setStart] = useState(0);

    useEffect(() => {
        // admin 확인
        if (props.topic === '1') {
            yxios.get(`/account/check-role-admin`)
                .then((res) => {
                    setCheckAdmin(res.data);
                })
                .catch(() => {

                })
        } else {
            setCheckAdmin(true);
        }

        // 게시판 List 출력
        yxios.get(`/v1/community/board/list?topic=${props.topic}&start=${start}`)
            .then((res) => {
                setBoardList(res.data);
            })
            .catch(() => {

            })
    }, [props.topic, props.createModal])

    const previous = () => {
        const start_ = start - 6;

        if (start_ >= 0)
            yxios.get(`/v1/community/board/list?topic=${props.topic}&start=${start_}`)
                .then((res) => {
                    if (res.data.length !== 0) {
                        setBoardList(res.data);
                        setStart(start_);
                    }
                })
                .catch(() => {
                })
    }

    const next = () => {
        const start_ = start + 6;
        yxios.get(`/v1/community/board/list?topic=${props.topic}&start=${start_}`)
            .then((res) => {
                if (res.data.length !== 0) {
                    setBoardList(res.data);
                    setStart(start_);
                }
            })
            .catch(() => {

            })
    }

    return (
        <>
            <div className="position-relative">
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <Row>
                                <Col>
                                    {checkAdmin ?
                                        <Button
                                            color="primary"
                                            size="sm"
                                            type="button"
                                            style={{
                                                "float": "right",
                                                "marginBottom": "10px"
                                            }}
                                            onClick={() => props.setCreateModal(!props.createModal)}
                                        >
                                            게시글 작성
                                        </Button>
                                        :
                                        <></>
                                    }
                                </Col>
                            </Row>
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center">
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>제목</th>
                                                <th>작성자</th>
                                                <th>작성일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {boardList.map((item, idx) => {
                                            return (
                                            <tr
                                                key={idx}
                                                style={{
                                                    "cursor": "pointer"
                                                }}
                                                onClick={() => setBoardIdx(item.cb_no)}
                                            >
                                                <td>{item.cb_title}</td>
                                                <td>{item.writer + '(' + item.student_no + ')'}</td>
                                                <td>{item.cb_cr_date.replace('T', ' ').slice(0, -10)}</td>
                                            </tr>)
                                        })}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pagination
                                        aria-label="Page navigation example"
                                        style={{
                                            "justifyContent": "center"
                                        }}
                                    >
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={previous}
                                                previous
                                            />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={next}
                                                next
                                            />
                                        </PaginationItem>
                                    </Pagination>
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
            </div>
            <ReadBoardModal
                boardIdx={boardIdx}
                setBoardIdx={setBoardIdx}
            />
        </>
    );
};

export default CommunityBoardTable;
