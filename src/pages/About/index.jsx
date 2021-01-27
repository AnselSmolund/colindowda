import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../../components/StyledComponents";
import { Col, Row, Container, Image } from "react-bootstrap";
import ColImg from "../../assets/images/colin_about_page.jpg";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { MainTheme } from "../../styles/colors";
import {
  desktopOnly,
  phoneOnly,
  phoneWidthMax,
  tabletAndPhoneOnly,
  tabletOnly,
} from "../../util/breakpoints";
import { useWindowSize } from "../../util/hooks";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion } from "framer-motion";
import { INSTAGRAM_LINK, TIKTOK_LINK } from "../../util/constants";
import ColImg3 from "../../assets/images/colin_about_page.jpg";
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
  z-index: -1;
  background-color: white;
  ${phoneOnly(`
    padding-top: 0px;

  `)}
`;

const MainImg = styled(motion.img)`
  max-height: 500px;
  position: fixed;
  margin: auto;
  margin-bottom: 0px;
  display: block;
  ${desktopOnly(`
        margin-top: 50px;
        margin-left: 50px;
  `)}
  ${tabletAndPhoneOnly(`
        position: relative;
        height: 300px;
    `)}
`;

const ClickImg = styled.img`
  height: 100px;
  position: fixed;
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
            {/* <ClickImg src={clickImg} /> */}
            <MainImg
              src={ColImg3}
              onClick={() => playAudio()}
              animate={isMobile ? { y: [240, 0] } : { y: [400, 0] }}
            />
          </Col>
          <Col xl={6}>
            <MainText>
              <h2
                style={{
                  color: MainTheme.orange,
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                About
              </h2>
              <p>
                Colin Dowda is a 24-year-old actor, writer, and comedian in
                Chicago, IL. He wrote, directed, and starred in musicals
                throughout college at the University of Wisconsin-Madison, then
                entered the world of comedy through stand-up. He developed a
                unique style full of music and props.
              </p>
              Now, he trains at
              <a href="https://www.secondcity.com/">
                {" "}
                The Second City
              </a> and{" "}
              <a href="https://www.actingstudiochicago.com/">
                Acting Studio Chicago{" "}
              </a>
              in both comedy and drama. He’s written his first feature film, and
              is working on a short film to be shot in Summer of 2021. He also
              makes dumb stuff, which you can find on{" "}
              <a href={INSTAGRAM_LINK}>Instagram</a>, or{" "}
              <a href={TIKTOK_LINK}>TikTok</a>.
              <br />
              <br />
              He’s obsessed with books, movies, music, and silliness. Some of
              his heroes are Judd Apatow, Seth Rogen, Kid Cudi, Conan O’Brien,
              Miley Cyrus, Cecily Strong, Maya Rudolph, Bill Hader, Andy
              Samberg, and Jim Carrey. His favorite snacks are Pop Tarts and
              fresh brownies, he likes to run, and he’s very bad at sports that
              require his hands. He is going to make some great movies one day
              and he hopes he makes you smile.
            </MainText>
            <LinkGroup>
              <HiOutlineMail style={{ margin: 10, marginLeft: 0 }} />
              <LinkOut href="mailto:colin@colindowda.com">
                colin@colindowda.com
              </LinkOut>
              <br />
              <HiOutlinePhone style={{ margin: 10, marginLeft: 0 }} />
              <LinkOut href="tel:9524289377">952-428-9377</LinkOut>
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
