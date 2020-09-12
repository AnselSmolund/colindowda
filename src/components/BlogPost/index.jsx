import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import firebase from "firebase";
import Container from "react-bootstrap/Container";

const MainContainer = styled.div`
  text-align: center;
  background: white;
  padding-top: 50px;
  min-height: 100vh;
`;

function BlogPost({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [post, setPost] = useState({});

  const fetchItem = async () => {
    var ref = firebase.database().ref(`blog/${match.params.id}`);
    ref.once("value").then(snap => {
      console.log(snap.val());
      setPost(snap.val());
    });
  };
  console.log(match);
  return (
    <MainContainer>
      <Container>
        <h1> {post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.body }}
          style={{ textAlign: "left" }}
        />
      </Container>
    </MainContainer>
  );
}

export default BlogPost;
