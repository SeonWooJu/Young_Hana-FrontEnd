import React, {useEffect, useRef} from "react";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

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
        <DemoNavbar />
        <main ref={mainRef}>
          <h1>뭘봐</h1>
        </main>
        <CardsFooter />
      </>
  );
}

export default Index;
