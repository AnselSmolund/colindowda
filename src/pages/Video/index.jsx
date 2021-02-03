import React, { useEffect, useState } from "react";
import { MainContainer, Title } from "../../components/StyledComponents";
import SingleVideo from "./SingleVideo";
import { Row, Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MainTheme } from "../../styles/colors";

const api_key = "AIzaSyCeDNJrk3_A9kg5RkBjT1h-iKieZ1Tmmks";
const channel_id = "UCBJycsmduvYEL83R_U4JriQ";

const HireMeBtnContainer = styled(motion.button)`
  background-color: ${MainTheme.lightBlue};
  color: #fff;
  border: 2px solid ${MainTheme.lightBlue};
  text-decoration: none;
  padding: 1em;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.5em;
  &:hover {
    background-color: ${MainTheme.cream};
    color: ${MainTheme.lightBlue};
    border: 2px solid ${MainTheme.cream};
  }
  &:focus {
    outline: none;
  }
`;

function Video() {
  const [youtubeIds, setYouTubeIds] = useState([]);
  const [maxResults, setMaxResults] = useState(4);

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=${maxResults}`;

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          let youtubeIds = [];
          result.items.map(item => {
            youtubeIds.push(item.id.videoId);
          });
          setYouTubeIds(youtubeIds);
        },
        error => {
          console.log(error);
        }
      );
  }, [maxResults]);
  if (youtubeIds.length <= 0) return null;
  return (
    <MainContainer>
      <Row style={{ marginTop: 20 }}>
        {youtubeIds.map(id => {
          return <SingleVideo id={id} />;
        })}
      </Row>
      <Row style={{ padding: 40 }}>
        <Col md={12}>
          <HireMeBtnContainer
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => setMaxResults(maxResults + 2)}
          >
            Load More
          </HireMeBtnContainer>
        </Col>
      </Row>
    </MainContainer>
  );
}

export default Video;
