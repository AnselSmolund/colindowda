import React from "react";
import "./style.css";
import ColImg from "../../assets/images/colinImg.jpg";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";

const MainContainer = styled.div`
  text-align: center;
  font-family: "Dosis", sans-serif;
  background: #fca311;
  padding-top: 50px;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  font-weight: 900;
  color: white;
  font-size: 70px;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;

const SubTitle = styled.h3`
  font-size: 25px;
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  height: 60vmin;
  pointer-events: none;
  ${phoneOnly(`
    height: 100vmin;
  `)}
`;

function Home() {
  return (
    <MainContainer>
      <Title>Colin Dowda </Title>
      <AppHeader>
        <MainImage src={ColImg} alt="logo" />
        <SubTitle>(Website Coming Soon)</SubTitle>
      </AppHeader>
    </MainContainer>
  );
}

export default Home;
