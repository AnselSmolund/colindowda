import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { phoneOnly } from "../../../util/breakpoints";

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
function SingleVideo(props) {
  return (
    <Col xl={6} style={{ padding: 30 }}>
      <VideoContainer>
        <embed
          src={`https://www.youtube.com/embed/${props.id}`}
          wmode="transparent"
          type="video/mp4"
          width="100%"
          height="100%"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen="allowFullScreen"
        />
      </VideoContainer>
    </Col>
  );
}

export default SingleVideo;
