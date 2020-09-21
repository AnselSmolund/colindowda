import React, { useRef, useEffect, useState } from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";
// import MainVid from "../../../assets/mainVid.mov";
import ImgThumbnail from "../../../assets/images/videoThumbnail.png";

function MainVideo(props) {
  return (
    <Player poster={ImgThumbnail}>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
}

export default MainVideo;
