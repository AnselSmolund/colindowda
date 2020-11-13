import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly, tabletOnly } from "../../../util/breakpoints";
import { MainTheme } from "../../../styles/colors";
import Container from "react-bootstrap/Container";
import MainVideo from "../MainVideo";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useWindowSize } from "../../../util/hooks";
import { motion } from "framer-motion";
import MainBtn from "./MainBtn";
import workImg from "../../../assets/images/work.png";
import mobileWorkImg from "../../../assets/images/mobile-work3.png";
import { phoneWidthMax } from "../../../util/breakpoints";
import { TIKTOK_LINK } from "../../../util/constants";

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
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ${phoneOnly(`
    font-size: 60px;
   `)}
`;

const WorkImg = styled.img`
  position: absolute;
  height: 150px;
  margin-top: 80px;
  margin-left: -100px;
  ${phoneOnly(`
    height: 120px;
    margin-left: -200px;
    margin-top: 60px;
`)}
  ${tabletOnly(`
height: 120px;
margin-left: -250px;
margin-top: 80px;
`)}
`;
const SubTitle = styled(motion.h3)`
  font-size: 30px;
  color: ${MainTheme.cream};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ${phoneOnly(`
  font-size: 25px;
 `)}
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
  const size = useWindowSize();
  const [videoOpen, toggleVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(size.width < phoneWidthMax);
  const [isDesktop, setIsDesktop] = useState(size.width > 1200);

  useEffect(() => {
    setIsMobile(size.width < phoneWidthMax);
    setIsDesktop(size.width > 1200);
  }, [size]);

  const hireBtn = useRef(null);
  const watchBtn = useRef(null);
  function fix() {
    var el = hireBtn.current;
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
                  btnText={"About Colin"}
                />
              </AboutMeCol>
              <HireMeCol md="auto" className="mt-5">
                <MainBtn
                  clickFunction={() => {
                    window.location = TIKTOK_LINK;
                  }}
                  btnText={"Watch More"}
                />
              </HireMeCol>
              <HireMeCol md="auto" className="mt-5">
                <MainBtn
                  clickFunction={() => {
                    window.location = "/services";
                  }}
                  reference={hireBtn}
                  btnText={"Services"}
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
                Comedian, Writer, Actor
              </SubTitle>
            </Col>
          </Row>
          <motion.div
            animate={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Row className="justify-content-md-center">
              <Col md="auto" className={isMobile ? "mt-2" : "mt-5"}>
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
                className={isMobile ? "mt-3" : "mt-5"}
                style={{ letterSpacing: "0.4em" }}
              >
                <MainBtn
                  btnText={"Work With Colin"}
                  clickFunction={() => {
                    window.location = "/contact";
                  }}
                />
                <WorkImg src={!isDesktop ? mobileWorkImg : workImg} />
              </Col>
            </Row>
          </motion.div>
        </Container>
      )}
    </MainContainer>
  );
}

export default MainHeader;
