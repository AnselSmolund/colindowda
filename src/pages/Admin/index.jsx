import React, { useState, useContext } from "react";
import "./style.css";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "firebase";
import moment from "moment";
import SignIn from "./SignIn";
import { UserContext } from "../../providers/UserProvider";

const MainContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  min-height: 100vh;
`;

const TitleFormInput = styled(Form.Control)`
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 0%;
  width: 50%;
  font-size: 24px;
  outline: none !important;
  outline-offset: none !important;
  &:focus{
      border-bottom 2px solid orange;
      box-shadow: none;
  }
`;

const MainForm = styled(Form)`
  &:focus {
    outline: none;
  }
`;

function Admin() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const user = useContext(UserContext);

  function handleEditorChange(content) {
    setContent(content);
  }

  function handleFormSubmit(event) {
    // send title and content to firebase
    event.preventDefault();
    let ref = firebase.database().ref();
    var postsRef = ref.child("blog");
    var newPostRef = postsRef.push();
    newPostRef
      .set({
        body: content,
        title: title,
        viewCount: 0,
        timeStamp: moment().format("MMMM Do YYYY")
      })
      .then(alert("blog posted"));
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  if (user) {
    return (
      <MainContainer>
        <h1> Admin Portal </h1>
        <Container>
          <MainForm onSubmit={handleFormSubmit} style={{ textAlign: "left" }}>
            <Form.Group controlId="postTitle" name="postTitle">
              <TitleFormInput
                type="text"
                placeholder="Title"
                name="postTitle"
                onChange={handleTitleChange}
              />
            </Form.Group>

            <Editor
              apiKey="4tlz68wqbhhvtz3eeu0d3k4n3z63ifflledypnacf60rruve"
              init={{
                height: 300,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | fontselect formatselect | bold italic backcolor forecolor |\
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                toolbar_mode: "floating"
              }}
              onEditorChange={handleEditorChange}
            />
            <Button type="submit" value="Submit" style={{ marginTop: 20 }}>
              Submit
            </Button>
          </MainForm>
        </Container>
      </MainContainer>
    );
  } else {
    return <SignIn />;
  }
}

export default Admin;
