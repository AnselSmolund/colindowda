import React, { useRef } from "react";
import "./style.css";
import ColImg from "../../assets/images/colinImg.jpg";
import ColImg2 from "../../assets/images/colin_headshot_2.jpeg";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Player, BigPlayButton } from "video-react";
import ImgThumbnail from "../../assets/images/videoThumbnail.png";
import MainVideo from "./MainVideo";
import MainHeader from "./MainHeader";

const MainContainer = styled(Container)`
  text-align: center;
  ${phoneOnly(`
    margin-top: 0px;
 `)}
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-weight: 900;
  color: white;
  font-size: 60px;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;

const MainImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

function Home() {
  return (
    <>
      <MainImage src={ColImg2} alt="logo" />
      <MainContainer fluid>
        <Row>
          <MainHeader></MainHeader>
        </Row>
      </MainContainer>
    </>
  );
}

export default Home;
