import React from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly, desktopOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import { MainContainer, Title } from "../../components/StyledComponents";
import ContactForm from "./ContactForm";
import Col from "react-bootstrap/Col";
import { Row, Container } from "react-bootstrap";
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
    text-align: left;
  `)}
`;

const FormText = styled.h5`
  ${phoneOnly(`
    text-align: left;
    font-size: 16px;
    margin-top:-10px;
  `)};
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
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={6}>
          <LinkGroup>
            <LinkText>
              <AiOutlineMessage style={{ margin: 10, marginBottom: 15 }} />
              Shoot me a text -
              <LinkOut href="sms:9524289377"> (952)-428-9377 </LinkOut>
            </LinkText>
            <LinkText>
              <HiOutlinePhone style={{ margin: 10, marginBottom: 15 }} />
              Call Me - <LinkOut href="tel:9524289377"> (952)-428-9377</LinkOut>
            </LinkText>
            <LinkText>
              <HiOutlineMail style={{ margin: 10, marginBottom: 15 }} />
              Email Me -{" "}
              <LinkOut href="mailto:colin@colindowda.com">
                colin@colindowda.com
              </LinkOut>
            </LinkText>
          </LinkGroup>
        </Col>
        <Col md={6}>
          <FormText>
            <AiOutlineForm style={{ margin: 10, marginBottom: 15 }} />
            Fill out the form
          </FormText>
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default Contact;
