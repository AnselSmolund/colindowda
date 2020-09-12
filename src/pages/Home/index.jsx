import React from "react";
import "./style.css";
import ColImg from "../../assets/images/colinImg.jpg";
import ColImg2 from "../../assets/images/colin_headshot_2.jpeg";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import Image from "react-bootstrap/Image";

const MainContainer = styled.div`
  text-align: center;
  background: ${MainTheme.orange};
  min-height: 110vh;
  margin-top: -60px;
  ${phoneOnly(`
    margin-top: 0px;
 `)}
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

const MainImage = styled(Image)`
  pointer-events: none;
  width: 100vw;
  height: 105vh;
  object-fit: cover;
  flex: 1;
`;

function Home() {
  return (
    <MainContainer>
      <MainImage src={ColImg2} alt="logo" />
    </MainContainer>
  );
}

export default Home;
