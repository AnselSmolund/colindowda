import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";

const FormRow = styled(Row)`
  margin: 20px;
`;
function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const emailObject = {
      email,
      name,
      message
    };

    console.log(emailObject);
  };
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
        <Button type="submit">Submit form</Button>
      </Row>
    </Form>
  );
}

export default ContactForm;
