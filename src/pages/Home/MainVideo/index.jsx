import React from "react";
import styled from "styled-components";
import { phoneOnly, tabletOnly } from "../../../util/breakpoints";

const VideoContainer = styled.div`
  width: 640px;
  height: 360px;
  ${tabletOnly(`
  width: 480px;
  height: 270px;
`)}
  ${phoneOnly(`
    width: 320px;
    height: 180px;
`)}
  margin: auto;
`;
function MainVideo(props) {
  return (
    <VideoContainer>
      <iframe
        src="https://player.vimeo.com/video/492873967"
        style={{ height: "100%", width: "100%" }}
        frameborder="0"
        allow="autoplay; fullscreen"
        autoplay
        autoplay={1}
        allowfullscreen
      ></iframe>
    </VideoContainer>
  );
}

export default MainVideo;
