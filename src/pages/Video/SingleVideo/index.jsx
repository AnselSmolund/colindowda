import React from "react";
import { Container, Col } from "react-bootstrap";

function SingleVideo(props) {
  return (
    <Col xl={6} style={{ padding: 30 }}>
      <iframe
        style={{ margin: "0 auto", display: "block" }}
        id="ytplayer"
        type="text/html"
        width="480"
        height="277"
        src={`https://www.youtube.com/embed/${props.id}`}
        frameborder="0"
      ></iframe>
    </Col>
  );
}

export default SingleVideo;
