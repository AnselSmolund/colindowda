import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import firebase from "firebase";
import BlogTile from "./BlogTile";

const MainContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  min-height: 100vh;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  font-weight: 900;
  color: #ff9f1c;
  font-size: 70px;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;
function Blog() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    let ref = firebase.database().ref();
    ref.once("value").then(snap => {
      if (snap.val()) {
        setPosts(snap.val().blog);
      }
    });
  }, []);
  let blogPosts = [];
  if (posts) {
    for (var key in posts) {
      blogPosts.push({
        title: posts[key].title,
        body: posts[key].body,
        timeStamp: posts[key].timeStamp,
        viewCount: posts[key].viewCount,
        id: key
      });
    }
  }

  return (
    <MainContainer>
      <Title> Blog </Title>
      {blogPosts.map(post => (
        <BlogTile post={post} />
      ))}
    </MainContainer>
  );
}

export default Blog;
