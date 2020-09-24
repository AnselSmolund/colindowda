import React from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../../components/StyledComponents";
import { Col, Row, Container, Image } from "react-bootstrap";
import ColImg from "../../assets/images/colinImg.jpg";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { MainTheme } from "../../styles/colors";
import { phoneOnly } from "../../util/breakpoints";

const MainImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const MainTextContainer = styled(Container)`
  padding: 20px;
`;
const MainText = styled.p`
  color: black;
  ${phoneOnly(`
    padding-top: 30px;
    margin-bottom -20px;
  `)}
`;
function About() {
  return (
    <MainContainer>
      <Row>
        <Col>
          <Title>About Colin</Title>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xl={4}>
          <Image
            src={ColImg}
            style={{
              height: 400,
              margin: "auto",
              display: "block"
            }}
          />
        </Col>
        <Col xl={4}>
          <MainText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio
            quos expedita ipsam quaerat est animi quam dolore corporis
            quibusdam? Commodi odio ea harum veritatis, beatae est voluptatum
            quasi labore!
          </MainText>
        </Col>
      </Row>
      <Row style={{ marginTop: 40 }}>
        <Container>
          <SocialNavGroup />
        </Container>
      </Row>
    </MainContainer>
  );
}

export default About;
