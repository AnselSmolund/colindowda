import React, { useState, useEffect } from "react";
import "./style.css";
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

function Contact() {
  return (
    <MainContainer>
      <Title> Contact </Title>
    </MainContainer>
  );
}

export default Contact;
