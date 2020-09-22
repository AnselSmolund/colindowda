import React from "react";
import "./style.css";
import ColImg2 from "../../assets/images/colin_headshot_2.jpeg";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MainHeader from "./MainHeader";

const MainContainer = styled(Container)`
  text-align: center;
  ${phoneOnly(`
    margin-top: 0px;
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
