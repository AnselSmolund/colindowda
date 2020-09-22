import React from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";
import MainVid from "../../../assets/ShortVideo.mov";
import ImgThumbnail from "../../../assets/images/videoThumbnail.png";

function MainVideo(props) {
  return (
    <Player src={MainVid} poster={ImgThumbnail} autoPlay playsInline>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
}

export default MainVideo;
