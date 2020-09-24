import React from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../../components/StyledComponents";
import { Col, Row, Container, Image } from "react-bootstrap";
import ColImg from "../../assets/images/colinImg.jpg";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { MainTheme } from "../../styles/colors";
import { phoneOnly } from "../../util/breakpoints";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion } from "framer-motion";

const MainImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const MainText = styled.p`
  color: black;
  ${phoneOnly(`
    padding-top: 30px;
    text-align: center;
  `)}
`;

const LinkGroup = styled.p`
  margin-top: 10px;
  font-size: 20px;
  ${phoneOnly(`
text-align: center;
`)}
`;
const LinkOut = styled.a`
  text-decoration: none;
`;
function About() {
  return (
    <MainContainer style={{ paddingBottom: 20 }}>
      <Row>
        <Col>
          <Title>About Colin</Title>
        </Col>
      </Row>

      <Row className="justify-content-xl-center">
        <Col xl={4}>
          <motion.img
            src={ColImg}
            style={{
              height: 400,
              margin: "auto",
              display: "block"
            }}
          />
        </Col>
        <Col xl={4}>
          <MainText
            style={{
              margin: "auto",
              display: "block"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio
            quos expedita ipsam quaerat est animi quam dolore corporis
            quibusdam? Commodi odio ea harum veritatis, beatae est voluptatum
            quasi labore!
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
        </Col>
      </Row>
      <Row style={{ marginTop: 40 }}>
        <Container>
          <SocialNavGroup color={MainTheme.lightBlue} size={30} />
        </Container>
      </Row>
    </MainContainer>
  );
}

export default About;
