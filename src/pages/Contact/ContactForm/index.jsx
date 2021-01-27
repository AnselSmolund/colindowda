import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import emailSentImg from "../../../assets/images/colin_email.jpg";
import MainBtn from "../../Home/MainHeader/MainBtn";
import { MainTheme } from "../../../styles/colors";
import { phoneOnly } from "../../../util/breakpoints";

const FormRow = styled(Row)`
  margin: 20px;
`;

export const SubmitFormBtn = styled(Button)`
  background-color: ${MainTheme.lightBlue};
  border-radius: 0%;
  color: #fff;
  border: 2px solid ${MainTheme.lightBlue};
  text-decoration: none;
  padding: 1em;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.5em;
  ${phoneOnly(`
    font-size:14px;
    `)}
  &:hover {
    background-color: ${MainTheme.cream};
    color: ${MainTheme.lightBlue};
    border: 2px solid ${MainTheme.cream};
  }
  &:focus {
    outline: none;
  }
`;
function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailObject = {
      email,
      name,
      message,
    };

    const templateId = "template_2evi8bm";
    sendFeedback(templateId, {
      message: emailObject.message,
      from_name: emailObject.name,
      reply_to: emailObject.email,
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_58ik5eh", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        setEmailSent(true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        setEmailError(true);
        setEmailSent(true);
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  };
  if (emailSent)
    return emailError ? (
      <h3>
        Uh oh! There has been an error sending an email. Find me on my social
        media and we can talk!
      </h3>
    ) : (
      <Row className="justify-content-center">
        <Col>
          <h3> Email Sent 👍 </h3>
          <p>
            You'll be hearing from me soon!{" "}
            <a
              href="#"
              onClick={() => {
                setEmailSent(false);
              }}
            >
              Send Another
            </a>
          </p>
          <Image src={emailSentImg} fluid></Image>
        </Col>
      </Row>
    );
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow className="justify-content-center">
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
        />
      </FormRow>
      <FormRow className="justify-content-center">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormRow>
      <FormRow className="justify-content-center">
        <Form.Control
          as="textarea"
          placeholder="Enter message"
          value={message}
          onChange={handleMessageChange}
          rows="10"
        />
      </FormRow>
      <Row className="justify-content-center">
        <SubmitFormBtn type="submit" style={{ marginBottom: 10 }}>
          Submit form
        </SubmitFormBtn>
      </Row>
    </Form>
  );
}

export default ContactForm;
