import React, { useState } from "react";
import { auth } from "../../../components/Firebase/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      alert("incorrect login, try again");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Container style={{ paddingLeft: "20%", paddingRight: "20%" }}>
      <h1> Admin Login </h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="userEmail"
            placeholder="Enter email"
            onChange={event => onChangeHandler(event)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="userPassword"
            placeholder="Password"
            onChange={event => onChangeHandler(event)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={event => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default SignIn;
