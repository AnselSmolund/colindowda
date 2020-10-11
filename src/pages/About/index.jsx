import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../../components/StyledComponents";
import { Col, Row, Container, Image } from "react-bootstrap";
import ColImg from "../../assets/images/colinImg.jpg";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { MainTheme } from "../../styles/colors";
import {
  phoneOnly,
  phoneWidthMax,
  tabletAndPhoneOnly,
  tabletOnly
} from "../../util/breakpoints";
import { useWindowSize } from "../../util/hooks";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion } from "framer-motion";
import clickImg from "../../assets/images/click_me.png";
import ColImg3 from "../../assets/images/colin_transparent.png";
import trippyimg from "../../assets/trippy6.svg";
import audioFile from "../../assets/sounds/Oh-no.mov";

const MainImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const BigContainer = styled.div`
  position: fixed;
  top: 0;
  background: white;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -100;
`;

const MainText = styled.p`
  margin: 0;
  color: black;
  font-size: 1em;
  padding-top: 50px;
  z-index: -1;
  background-color: white;
  ${phoneOnly(`
    padding-top: 0px;
    text-align: center;
  `)}
`;

const MainImg = styled(motion.img)`
  max-height: 700px;
  position: fixed;
  margin: auto;
  margin-bottom: 0px;
  display: block;
  ${tabletAndPhoneOnly(`
  position: relative;
        height: 300px;
    `)}
`;

const ClickImg = styled.img`
  height: 100px;
  position: absolute;
  ${phoneOnly(`
    height:70px;
  `)}
  ${tabletOnly(`
    margin-left: 100px;
  `)}
`;

const LinkGroup = styled.p`
  padding-top: 10px;
  font-size: 20px;
  background-color: white;
  ${phoneOnly(`
    text-align: center;
  `)}
`;
const LinkOut = styled.a`
  text-decoration: none;
  color: black;
`;

function About() {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(size.width < phoneWidthMax);

  let audio = new Audio(audioFile);

  function playAudio() {
    audio.play();
  }
  useEffect(() => {
    setIsMobile(size.width < 1200);
  }, [size]);

  return (
    <>
      {/* <MainImage src={trippyimg}></MainImage> */}
      <BigContainer></BigContainer>
      <MainContainer style={{ paddingBottom: 20 }}>
        {/* <Row>
          <Col>
            <Title>About Colin</Title>
          </Col>
        </Row> */}

        <Row className="justify-content-xl-center">
          <Col xl={6}>
            <ClickImg src={clickImg} />
            <MainImg
              src={ColImg3}
              onClick={() => playAudio()}
              animate={isMobile ? { y: [240, 0] } : { y: [400, 0] }}
            />
          </Col>
          <Col xl={6}>
            <MainText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              optio quos expedita ipsam quaerat est animi quam dolore corporis
              quibusdam? Commodi odio ea harum veritatis, beatae est voluptatum
              quasi labore! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae optio quos expedita ipsam quaerat est animi quam
              dolore corporis quibusdam? Commodi odio ea harum veritatis, beatae
              est voluptatum quasi labore!
            </MainText>
            <LinkGroup>
              <HiOutlineMail style={{ margin: 10, marginLeft: 0 }} />
              <LinkOut href="mailto:anssmolund@gmail.com">
                booking@colindowda.com
              </LinkOut>
              <br />
              <HiOutlinePhone style={{ margin: 10, marginLeft: 0 }} />
              <LinkOut href="tel:5554280940">555-428-0940</LinkOut>
            </LinkGroup>
            <SocialNavGroup
              color={MainTheme.lightBlue}
              size={50}
              centered={isMobile}
              marginleft={!isMobile && "-20px"}
              style={{ backgroundColor: "white", margin: 0 }}
            />
          </Col>
        </Row>
      </MainContainer>
    </>
  );
}

export default About;
