import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { phoneOnly } from "../../../util/breakpoints";
import YouTube from "react-youtube";

const VideoContainer = styled.div`
  width: 560px;
  height: 315px;
  float: none;
  clear: both;
  margin: 2px auto;
  ${phoneOnly(`
    width: 100%;
    height: 120%;
    
`)}
`;

function onReady(event) {
  event.target.mute();
}
function SingleVideo(props) {
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      playsinline: 1
    }
  };
  return (
    <Col xl={6}>
      <VideoContainer style={{ padding: 30, marginBottom: 40 }}>
        <YouTube videoId={props.id} opts={opts} onReady={onReady} />
      </VideoContainer>
    </Col>
  );
}

export default SingleVideo;
