import React, {useEffect, useState} from "react";
import {Button, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftjsToHtml from "draftjs-to-html";
import yxios from "../../assets/util/yxios";
import {now} from "moment";
import parse from 'html-react-parser';

const ReadBoardModal = (props) => {
    const [boardData, setBoardData] = useState({
        cb_title: "",
        cb_content: "",
        cb_cr_date: now().toString(),
        my_board: false
    });

    useEffect(() => {
        yxios.get(`/v1/community/board?board_no=${props.boardIdx}`)
            .then((res) => {
                setBoardData(res.data);
            })
            .catch(() => {

            })
    }, [props.boardIdx])

    return (
        <Modal
            size="xl"
            isOpen={props.boardIdx !== ""}
            toggle={() => props.setBoardIdx("")}
            centered
        >
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    {boardData.cb_title}
                </h5>
                <div>
                    <p className="mb-0" style={{"fontSize": "13px"}}>
                        {boardData.cb_cr_date.replace('T', ' ').slice(0, -10)}
                    </p>
                    <p className="mb-0" style={{"fontSize": "13px"}}>
                        {boardData.writer + '(' + boardData.student_no + ')'}
                    </p>
                </div>
            </div>
            <ModalBody>
                <Row>
                    <Col>
                        {parse(boardData.cb_content)}
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                {boardData.my_board ?
                    <Button
                        color="danger"
                        data-dismiss="modal"
                        outline
                        type="button"
                        onClick={() => props.setBoardIdx("")}
                    >
                        삭제
                    </Button>
                    :
                    <></>
                }
                <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => props.setBoardIdx("")}
                >
                    닫기
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ReadBoardModal;