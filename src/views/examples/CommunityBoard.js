import React, {useEffect, useRef, useState} from "react";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import BasicNavbar from "components/Navbars/BasicNavbar.js";
import BasicFooter from "components/Footers/BasicFooter.js";

// index page sections
import {useParams} from "react-router-dom";
import CommunityBoardContent from "../../components/Contents/CommunityBoardContent";
import CommunityBoardTable from "../../components/Contents/CommunityBoardTable";

// import {Cookies} from "react-cookie";

function CommunityBoard() {
    const mainRef = useRef(null);
    const { topic } = useParams();
    const [createModal, setCreateModal] = useState(false);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        if (mainRef.current) {
            mainRef.current.scrollTop = 0;
        }
    }, [mainRef]);


    return (
        <>
            <BasicNavbar />
            <main ref={mainRef}>
                <CommunityBoardContent topic={topic} />
                <CommunityBoardTable
                    topic={topic}
                    createModal={createModal}
                    setCreateModal={setCreateModal}
                />
            </main>
            <BasicFooter />
        </>
    );
}

export default CommunityBoard;
