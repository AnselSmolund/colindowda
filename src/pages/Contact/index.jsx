import React from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import { MainContainer, Title } from "../../components/StyledComponents";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <MainContainer>
      <Title> Contact </Title>
      <ContactForm></ContactForm>
    </MainContainer>
  );
}

export default Contact;
