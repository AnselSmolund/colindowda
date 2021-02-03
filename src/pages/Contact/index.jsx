import React from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly, desktopOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import { MainContainer } from "../../components/StyledComponents";
import ContactForm from "./ContactForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SocialNavGroup from "../../components/NavComponent/SocialNavGroup";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMessage, AiOutlineForm } from "react-icons/ai";

const LinkGroup = styled.p`
  padding-top: 10px;
  font-size: 16px;
  background-color: white;

  ${desktopOnly(`
    text-transform: uppercase;
    font-size: 20px;
    `)}
`;
const LinkText = styled.h5`
  ${phoneOnly(`
    font-size: 16px;
 
  `)}
`;

const LinkOut = styled.a`
  color: ${MainTheme.orange};
  &:hover {
    color: ${MainTheme.orange};
  }
`;

function Contact() {
  return (
    <MainContainer>
      <Row className="justify-content-center" style={{ marginTop: 20 }}>
        <Col style={{ textAlign: "center" }}>
          <h1> Lets Work Together! </h1>
          <SocialNavGroup
            color={MainTheme.lightBlue}
            size={30}
            centered={true}
            style={{ backgroundColor: "white", margin: 0 }}
          ></SocialNavGroup>
          <LinkText>
            <HiOutlineMail style={{ margin: 10, marginBottom: 15 }} />
            Email Me -{" "}
            <LinkOut href="mailto:colin@colindowda.com">
              colin@colindowda.com
            </LinkOut>
          </LinkText>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={12}>
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default Contact;
