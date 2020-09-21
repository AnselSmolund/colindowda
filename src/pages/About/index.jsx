import React from "react";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";

const MainContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  min-height: 100vh;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  font-weight: 900;
  color: #ff9f1c;
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

function About() {
  return (
    <MainContainer>
      <Title>About</Title>
    </MainContainer>
  );
}

export default About;

