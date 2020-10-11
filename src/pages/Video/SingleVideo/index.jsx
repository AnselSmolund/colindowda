import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { phoneOnly } from "../../../util/breakpoints";
import YouTube from "react-youtube";

const VideoContainer = styled.div`
  width: 500px;
  height: 240px;
  float: none;
  clear: both;
  margin: 5px auto;
  ${phoneOnly(`
    width: 100%;
    height: 120%;
    margin-bottom:10px;
    padding: 10px;
    
`)}
`;

function onReady(event) {
  event.target.mute();
}
function SingleVideo(props) {
  const opts = {
    height: "240",
    width: "100%",
    playerVars: {
      playsinline: 1
    }
  };
  return (
    <Col xl={6}>
      <VideoContainer>
        <YouTube videoId={props.id} opts={opts} onReady={onReady} />
      </VideoContainer>
    </Col>
  );
}

export default SingleVideo;
