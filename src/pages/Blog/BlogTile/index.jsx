import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firebase from "firebase";
import Form from "react-bootstrap/Form";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import { UserContext } from "../../../providers/UserProvider";

const BlogTitle = styled.h1`
  color: black;
  text-align: left;
`;
const MainTile = styled.p`
  text-align: left;
`;
const MainContainer = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
`;

const TitleFormInput = styled(Form.Control)`
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 0%;
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

function throwPostAway(id) {
  if (window.confirm("Are you sure you want to delete this post?")) {
    var ref = firebase.database().ref(`blog/${id}`);
    ref.remove();
    window.location.reload();
  } else {
    console.log("not deleted");
  }
}

function BlogTile(props) {
  const { post } = props;
  const [content, setContent] = useState(post.body);
  const [title, setTitle] = useState(post.title);
  const [editPost, toggleEdit] = useState(false);
  const user = useContext(UserContext);

  function handleEditorChange(content) {
    setContent(content);
  }

  function handleFormSubmit(e) {
    let ref = firebase.database().ref(`blog/${post.id}`);
    ref.child("body").set(content);
    ref.child("title").set(title);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  if (!editPost) {
    return (
      <Container
        style={{ paddingBottom: 40, paddingLeft: 100, paddingRight: 100 }}
      >
        <Card>
          <Card.Body>
            <Row>
              <Col md="auto">
                <Link to={`/blog/${post.id}`}>
                  <BlogTitle>
                    <Card.Title>{post.title}</Card.Title>
                  </BlogTitle>
                </Link>
              </Col>
              {user && (
                <Col md={"auto"}>
                  <FaTrash
                    onClick={() => throwPostAway(post.id)}
                    style={{ marginLeft: 10 }}
                  />
                  <FaPencilAlt
                    onClick={() => toggleEdit(true)}
                    style={{ marginLeft: 10 }}
                  />
                </Col>
              )}
            </Row>
            <Card.Text>
              <Row>
                <Col md="auto">
                  <p>
                    <strong>{post.timeStamp}</strong>
                  </p>
                </Col>
                <Col md="auto">
                  <p>
                    <strong>Views:</strong> {post.viewCount}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <MainTile
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  ></MainTile>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  } else {
    return (
      <MainContainer>
        <MainForm onSubmit={handleFormSubmit} style={{ textAlign: "left" }}>
          <Form.Group controlId="postTitle" name="postTitle">
            <TitleFormInput
              type="text"
              value={title}
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
            value={post.body}
          />
          <Button type="submit" value="Submit" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </MainForm>
      </MainContainer>
    );
  }
}

export default BlogTile;
