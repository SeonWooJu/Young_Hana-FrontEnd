import React, {useEffect, useRef} from "react";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import BasicNavbar from "components/Navbars/BasicNavbar.js";
import BasicFooter from "components/Footers/BasicFooter.js";

// index page sections
import IndexContent from "../components/Contents/IndexContent";

// import {Cookies} from "react-cookie";

function Index() {
    const mainRef = useRef(null);

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
            <IndexContent />
        </main>
        <BasicFooter />
    </>
  );
}

export default Index;
