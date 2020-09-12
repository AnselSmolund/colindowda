import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { FirebaseContext } from "../../components/Firebase";
import firebase from "firebase";

const MainContainer = styled.div`
  text-align: center;
  font-family: "Dosis", sans-serif;
  background: #fca311;
  padding-top: 50px;
  min-height: 100vh;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  font-weight: 900;
  color: white;
  font-size: 70px;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;

const SubTitle = styled.h3`
  font-size: 25px;
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  console.log(posts);
  let blogPosts = [];
  if (posts) {
    for (var key in posts) {
      console.log(posts[key]);
      blogPosts.push({
        title: posts[key].title,
        body: posts[key].body,
        id: key
      });
    }
    console.log(blogPosts);
  }

  return (
    <MainContainer>
      <Title> Blog </Title>
      {blogPosts.map(post => (
        <Link to={`/blog/${post.id}`}>
          <h1> {post.title} </h1>
        </Link>
      ))}
    </MainContainer>
  );
}

export default Blog;
