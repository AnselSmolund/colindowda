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
const Title = styled.h1`
  color: ${MainTheme.cream};
  font-size: 100px;
  font-weight: 900;
  ${phoneOnly(`
    font-size: 70px;
   `)}
`;

const SubTitle = styled.h3`
  font-size: 50px;
  color: white;
  font-weight: 100;
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

const HireMeBtn = styled.a`
  background-color: transparent;
  color: #fff;
  border: 2px solid ${MainTheme.lightBlue};
  transition: color 170ms ease-in-out, border-color 170ms ease-in-out;
  text-decoration: none;
  padding: 1em;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 900;
  font-style: normal;
  &:hover {
    background-color: ${MainTheme.lightBlue};
    border: 2px solid ${MainTheme.lightBlue};
    color: #fff;
    text-decoration: none;
  }
  &:focus {
    border: 2px solid ${MainTheme.lightBlue};
    outline: none;
  }
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
margin-top:80px
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
          <MobileRow>
            <Col md={8} style={{ margin: "0 auto" }}>
              <MainVideo />
            </Col>
          </MobileRow>
          <Row style={{ marginTop: 50 }}>
            <AboutMeCol md={4} className="mt-5">
              <HireMeBtn href="/about" ref={aboutBtn}>
                About Colin
              </HireMeBtn>
            </AboutMeCol>
            <HireMeCol md={4} className="mt-5">
              <HireMeBtn href="/videos"> Watch More </HireMeBtn>
            </HireMeCol>
            <HireMeCol md={4} className="mt-5">
              <HireMeBtn href="/contact"> Hire Colin </HireMeBtn>
            </HireMeCol>
          </Row>
        </>
      )}
      {!videoOpen && (
        <Container>
          <Row>
            <Col>
              <Title>Colin Dowda </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <SubTitle> Comedy Writer, Improviser, and Stand-Up </SubTitle>
            </Col>
          </Row>
          <Row style={{ paddingTop: 40 }}>
            <Col md={6} className="mt-5">
              <HireMeBtn
                href="#"
                onClick={() => {
                  toggleVideo(!videoOpen);
                  setTimeout(() => {
                    fix();
                  }, 1);
                }}
              >
                Watch Colin
              </HireMeBtn>
            </Col>
            <Col md={6} className="mt-5">
              <HireMeBtn href="/contact"> Hire Colin </HireMeBtn>
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

export default MainHeader;
