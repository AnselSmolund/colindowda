import React, { useState, useRef } from "react";
import "./style.css";
import ColImg from "../../../assets/images/colinImg.jpg";
import styled from "styled-components";
import { phoneOnly } from "../../../util/breakpoints";
import { MainTheme } from "../../../styles/colors";
import Container from "react-bootstrap/Container";
import MainVideo from "../MainVideo";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion, AnimatePresence } from "framer-motion";
import MainBtn from "./MainBtn";

const MainContainer = styled(Container)`
  text-align: center;
  margin: 0 auto;
  padding: 100px;
  padding-left: 0px;
  padding-right: 0px;
  ${phoneOnly(`
    position: fixed;
    top: 35%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    padding: 20px;
    padding-top:100px;

   

  `)};
`;
const Title = styled(motion.h1)`
  color: ${MainTheme.orange};
  font-size: 100px;
  font-weight: 900;
  ${phoneOnly(`
    font-size: 60px;
   `)}
`;

const SubTitle = styled(motion.h3)`
  font-size: 50px;
  color: ${MainTheme.cream};
  font-weight: bold;
  ${phoneOnly(`
  font-size: 20px;
 `)}
`;

const AppHeader = styled.header`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeCol = styled(Col)`
  ${phoneOnly(`
margin-top:80px
`)}
`;
const HireMeCol = styled(Col)`
  ${phoneOnly(`
margin-top:80px
`)}
`;

const MobileRow = styled(Row)`
  margin-top: -70px;
  ${phoneOnly(`
    margin-top:140px
`)}
`;

const MainTitleRow = styled(Row)`
  ${phoneOnly(`
margin-top:140px
`)}
`;

function MainHeader(props) {
  const [videoOpen, toggleVideo] = useState(false);
  const aboutBtn = useRef(null);
  function fix() {
    var el = aboutBtn.current;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {
      par.insertBefore(el, next);
    }, 0);
  }
  return (
    <MainContainer>
      {videoOpen && (
        <>
          <motion.div
            animate={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <MobileRow className="justify-content-md-center">
              <Col md={8} style={{ margin: "0 auto" }}>
                <MainVideo />
              </Col>
            </MobileRow>
          </motion.div>
          <motion.div animate={{ y: [-100, 0] }} transition={{ duration: 0.5 }}>
            <Row className="justify-content-md-center">
              <AboutMeCol md="auto" className="mt-5">
                <MainBtn
                  clickFunction={() => {
                    window.location = "/about";
                  }}
                  reference={aboutBtn}
                  btnText={"About Colin"}
                />
              </AboutMeCol>
              <HireMeCol md="auto" className="mt-5">
                <MainBtn
                  clickFunction={() => {
                    window.location = "/videos";
                  }}
                  btnText={"Watch More"}
                />
              </HireMeCol>
              <HireMeCol md="auto" className="mt-5">
                <MainBtn
                  clickFunction={() => {
                    window.location = "/contact";
                  }}
                  btnText={"Hire Colin"}
                />
              </HireMeCol>
            </Row>
          </motion.div>
        </>
      )}
      {!videoOpen && (
        <Container>
          <MainTitleRow>
            <Col>
              <Title animate={{ x: [-400, 0] }} transition={{ duration: 0.5 }}>
                Colin Dowda
              </Title>
            </Col>
          </MainTitleRow>
          <Row>
            <Col>
              <SubTitle
                animate={{ x: [400, 0] }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                Comedy Writer, Improviser, and Stand-Up{" "}
              </SubTitle>
            </Col>
          </Row>
          <motion.div
            animate={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Row className="justify-content-md-center">
              <Col md="auto" className="mt-5">
                <MainBtn
                  btnText={"Watch Colin"}
                  clickFunction={() => {
                    console.log("clicked");
                    window.location = "#";
                    toggleVideo(!videoOpen);
                    setTimeout(() => {
                      fix();
                    }, 1);
                  }}
                />
              </Col>
              <Col
                md="auto"
                className="mt-5"
                style={{ letterSpacing: "0.4em" }}
              >
                <MainBtn
                  btnText={"Hire Colin"}
                  clickFunction={() => {
                    window.location = "/contact";
                  }}
                />
              </Col>
            </Row>
          </motion.div>
        </Container>
      )}
    </MainContainer>
  );
}

export default MainHeader;
