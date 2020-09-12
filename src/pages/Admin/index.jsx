import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "firebase";

const MainContainer = styled.div`
  text-align: center;
  background: #fca311;
  padding-top: 50px;
  min-height: 100vh;
`;

function Admin() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  function handleEditorChange(content) {
    setContent(content);
  }

  function handleFormSubmit(event) {
    // send title and content to firebase
    let ref = firebase.database().ref();
    var postsRef = ref.child("blog");
    var newPostRef = postsRef.push();
    newPostRef.set({
      body: content,
      title: title
    });
  }

  function handleTitleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }
  return (
    <MainContainer>
      <h1> Admin Portal </h1>
      <Container>
        <Form onSubmit={handleFormSubmit} style={{ textAlign: "left" }}>
          <Form.Group controlId="postTitle" name="postTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Funny Post!"
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
                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
            }}
            onEditorChange={handleEditorChange}
          />
          <Button type="submit" value="Submit" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </Form>
      </Container>
    </MainContainer>
  );
}

export default Admin;
