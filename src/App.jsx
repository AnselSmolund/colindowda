import React from "react";
import "./App.css";
import ColImg from "./colinImg.jpg";
import styled from "styled-components";
import { phoneOnly } from "./util/breakpoints";

const MainContainer = styled.div`
  text-align: center;
  font-family: "Libre Caslon Display", serif;
  background: #fca311;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 100px;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled.img`
  height: 60vmin;
  pointer-events: none;
  ${phoneOnly(`
    height: 100vmin;
  `)}
`;

function App() {
  return (
    <MainContainer>
      <AppHeader>
        <Title>Colin Dowda </Title>
        <MainImage src={ColImg} alt="logo" />
      </AppHeader>
    </MainContainer>
  );
}

export default App;
