import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../util/hooks";
import { phoneWidthMax } from "../../util/breakpoints";
import "./style.css";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import Image from "react-bootstrap/Image";
import { MainContainer, Title } from "../../components/StyledComponents";
import SingleService from "./SingleService";
import testimg from "../../assets/images/services-pic.JPEG";
import weddingImg from "../../assets/icons/wedding-couple.png";
import scriptImg from "../../assets/icons/script.png";
import songImg from "../../assets/icons/songwriter.png";
import websiteImg from "../../assets/icons/web-programming.png";
import copyImg from "../../assets/icons/copywriting.png";
import brandImg from "../../assets/icons/flyers.png";
import socialImg from "../../assets/icons/bullhorn.png";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tempor nisi eget rutrum. Sed feugiat tristique sem eget tincidunt. Pellentesque id facilisis ligula. In quis ultrices nulla.";
const services = [
  {
    title: "Wedding Speech Writing",
    description: lorem,
    imgUrl: weddingImg,
    id: 0
  },
  {
    title: "Script Consultations",
    description: lorem,
    imgUrl: scriptImg,
    id: 1
  },
  {
    title: "Song Writing",
    description: lorem,
    imgUrl: songImg,
    id: 2
  },
  {
    title: "Ad Copy",
    description: lorem,
    imgUrl: copyImg,
    id: 3
  },
  {
    title: "Personal Website Copy",
    description: lorem,
    imgUrl: websiteImg,
    id: 4
  },
  {
    title: "Brand Consultations ",
    description: lorem,
    imgUrl: brandImg,
    id: 5
  },
  {
    title: "Twitter/Instagram Management and Caption Work",
    description: lorem,
    imgUrl: socialImg,
    id: 6
  }
];
function Services() {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(size.width < phoneWidthMax);

  useEffect(() => {
    setIsMobile(size.width < phoneWidthMax);
  }, [size]);

  return (
    <MainContainer>
      <Container
        style={
          !isMobile
            ? { paddingLeft: 30, paddingRight: 30, paddingTop: 30 }
            : { padding: 0 }
        }
      >
        <Row>
          <Col md={8}>
            <h1 style={{ color: MainTheme.orange }}> Services </h1>
            <p>
              Whether I’m making films, performing stand-up, or perfecting my
              website, writing is always the essential foundation. Outside of my
              personal work, I want to help people like you with your creative
              projects. The first meeting with me is always free and everything
              starts at <strong>$50</strong>.
              <br />
              <br />
              <strong>Scroll down </strong>to see what I offer, and if you don’t
              see your particular project listed here, no worries. I’m always
              looking for new projects and would love to hear from you.
              <br />
              <br />
            </p>
            <h4>
              If you see something you like
              <a href="mailto:colindowda@gmail.com"> Email Me!</a>
            </h4>
          </Col>
          <Col md={4}>
            <Image
              src={testimg}
              style={{ display: "block", margin: "auto" }}
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container
        style={
          !isMobile ? { padding: 40 } : { padding: 0, textAlign: "center" }
        }
      >
        {services.map(item => (
          <SingleService
            offset={item.id % 2 == 0 && !isMobile}
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </Container>
    </MainContainer>
  );
}

export default Services;
