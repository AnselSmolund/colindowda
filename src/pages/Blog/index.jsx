import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import firebase from "firebase";
import BlogTile from "./BlogTile";
import Spinner from "react-bootstrap/Spinner";
import { MainContainer, Title } from "../../components/StyledComponents";

function Blog() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    if (blogPosts.length > 0) {
      setLoading(false);
    }
  }, [blogPosts]);

  return (
    <MainContainer style={loading ? { textAlign: "center" } : {}}>
      <Title> Colin's Thoughts </Title>
      {loading ? (
        <Spinner animation="border" role="status" variant="warning" size="xl">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          {blogPosts.map(post => (
            <BlogTile post={post} />
          ))}
        </>
      )}
    </MainContainer>
  );
}

export default Blog;
