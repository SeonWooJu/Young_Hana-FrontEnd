import React, {useEffect, useState} from "react";
import {Button, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftjsToHtml from "draftjs-to-html";
import yxios from "../../assets/util/yxios";

const CreateBoardModal = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [body, setBody] = useState({
        cb_title: "",
        cb_content: "",
        cb_topic: ""
    });

    useEffect(() => {
        setBody({
            ...body,
            cb_topic: props.topic
        });
    }, [props.topic])

    const onEditorStateChange = (editorState) => {
        setBody({
            ...body,
            cb_content: draftjsToHtml(convertToRaw(editorState.getCurrentContent()))
        });

        // editorState에 값 설정
        setEditorState(editorState);
    };

    const handleChange = (e) => {
        setBody({
            ...body,
            ["cb_" + e.target.name]: e.target.value
        });
    }

    const createBoard = () => {
        yxios.post("/v1/community/board", body)
            .then((res) => {
                props.setCreateModal(!props.createModal);
                setBody({
                    cb_title: "",
                    cb_content: "",
                    cb_topic: props.topic
                });
                setEditorState(EditorState.createEmpty());
            })
            .catch(() => {

            })
    }

    return (
        <Modal
            size="xl"
            isOpen={props.createModal}
            toggle={() => props.setCreateModal(!props.createModal)}
            centered
        >
            <ModalHeader>
                <h5 className="modal-title" id="exampleModalLabel">
                    게시글 작성
                </h5>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col>
                        <FormGroup>
                            <Input
                                className="form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="제목"
                                type="text"
                                value={body.cb_title}
                                name="title"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Editor
                            // 에디터와 툴바 모두에 적용되는 클래스
                            wrapperClassName="wrapper-class"
                            // 에디터 주변에 적용된 클래스
                            editorClassName="editor"
                            // 툴바 주위에 적용된 클래스
                            toolbarClassName="toolbar-class"
                            // 툴바 설정
                            toolbar={{
                                // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: false },
                            }}
                            placeholder="내용을 작성해주세요."
                            // 한국어 설정
                            localization={{
                                locale: 'ko',
                            }}
                            // 초기값 설정
                            editorState={editorState}
                            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
                            onEditorStateChange={onEditorStateChange}
                        />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => props.setCreateModal(!props.createModal)}
                >
                    닫기
                </Button>
                <Button color="primary" type="button" onClick={createBoard}>
                    저장
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateBoardModal;