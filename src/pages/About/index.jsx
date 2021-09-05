import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/StyledComponents";
import { Col, Row } from "react-bootstrap";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { MainTheme } from "../../styles/colors";
import {
  desktopOnly,
  phoneOnly,
  phoneWidthMax,
  tabletAndPhoneOnly,
} from "../../util/breakpoints";
import { useWindowSize } from "../../util/hooks";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "../../util/constants";
import ColImg3 from "../../assets/images/colin_about_page.jpg";

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

  useEffect(() => {
    setIsMobile(size.width < 1200);
  }, [size]);

  return (
    <>
      <BigContainer></BigContainer>
      <MainContainer style={{ paddingBottom: 20 }}>
        <Row className="justify-content-xl-center">
          <Col xl={6}>
            <MainImg
              src={ColImg3}
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
                Colin Dowda is a 24-year-old actor, writer, and director in
                Chicago, IL. He wrote, directed, and starred in musicals
                throughout college at the University of Wisconsin-Madison, then
                entered the world of comedy through stand-up.
              </p>
              Now, he trains at
              <a href="https://www.secondcity.com/"> The Second City's</a> Grad
              Revue program and improvises all around Chicago. His first short
              film (written, directed by, and starring Colin) was shot Spring
              2021 and is set to enter the festival circuit by the end of the
              year. He also makes zero budget comedy shorts and other dumb
              stuff, which you can find on{" "}
              <a href={INSTAGRAM_LINK}>Instagram</a>, or{" "}
              <a href={YOUTUBE_LINK}>Youtube</a>.
              <br />
              <br />
              He’s obsessed with books, movies, music, and silliness. Some of
              his heroes are Bo Burnham, Judd Apatow, Seth Rogen, Kid Cudi,
              Conan O’Brien, Miley Cyrus, Cecily Strong, Wes Anderson, Edgar
              Wright, Maya Rudolph, Bill Hader, Amy Schumer, Andy Samberg, and
              Jim Carrey. He likes to run, he’s very bad at sports that require
              his hands, and he f**king loves lists. He is going to make some
              great movies one day and he hopes he makes you smile.
            </MainText>
            <LinkGroup>
              <HiOutlineMail style={{ margin: 10, marginLeft: 0 }} />
              <LinkOut href="mailto:colin@colindowda.com">
                colin@colindowda.com
              </LinkOut>
              <br />
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
