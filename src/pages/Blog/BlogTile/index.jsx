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
import { phoneOnly } from "../../../util/breakpoints";

const BlogTitle = styled.h1`
  color: black;
  text-align: left;
  font-weight: bold;
  ${phoneOnly(`
    text-align:center;
    font-size: 25px;
`)}
`;
const MainTile = styled.p`
  text-align: left;
`;
const MainContainer = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
`;

const MobileContainer = styled(Container)`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 40px;
  ${phoneOnly(`
    padding-left: 20px;
    padding-right: 20px;
`)}
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

const TrashIcon = styled(FaTrash)`
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const PencilIcon = styled(FaPencilAlt)`
  &:hover {
    cursor: pointer;
    color: orange;
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
      <MobileContainer>
        <Row className="justify-content-left">
          <Col xs="auto">
            <Link to={`/blog/${post.id}`}>
              <BlogTitle>{post.title}</BlogTitle>
            </Link>
          </Col>
          {user && (
            <Col xs="auto" style={{ marginTop: 15 }}>
              <TrashIcon
                onClick={() => throwPostAway(post.id)}
                style={{ marginLeft: 10 }}
              />
              <PencilIcon
                onClick={() => toggleEdit(true)}
                style={{ marginLeft: 10 }}
              />
            </Col>
          )}
        </Row>
        <Row>
          <Col xs="auto">
            <p>
              <strong>{post.timeStamp}</strong>
            </p>
          </Col>
          <Col xs="auto">
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
        <hr />
      </MobileContainer>
    );
  } else {
    return (
      <MobileContainer>
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
          <Button
            type="submit"
            value="Submit"
            style={{ margin: 20, marginLeft: 0 }}
          >
            Submit
          </Button>
          <Button
            style={{ margin: 20, marginLeft: 5 }}
            onClick={() => {
              toggleEdit(false);
            }}
          >
            Cancel
          </Button>
        </MainForm>
      </MobileContainer>
    );
  }
}

export default BlogTile;
