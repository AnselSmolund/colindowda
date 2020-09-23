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
    console.log("blog post loaded");
    window.scrollTo(0, 0);
    fetchItem();
  }, []);

  const [post, setPost] = useState({});

  const fetchItem = async () => {
    var ref = firebase.database().ref(`blog/${match.params.id}`);
    ref.child("viewCount").once("value", function(data) {
      ref.child("viewCount").set(parseInt(data.val()) + 1);
    });
    //ref.child("viewCount").set(parseInt(ref.child("viewCount")) + 1);
    ref.once("value").then(snap => {
      setPost(snap.val());
    });
  };
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
