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
import { AiOutlineMessage } from "react-icons/ai";

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
          <h5>
            You can reach me by contacting me with any links below or simply
            filling out the form!
          </h5>
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
            <SocialNavGroup
              color={MainTheme.lightBlue}
              size={30}
              centered={true}
              style={{ backgroundColor: "white", margin: 0 }}
            ></SocialNavGroup>
          </LinkGroup>
        </Col>
        <Col md={6}>
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default Contact;
