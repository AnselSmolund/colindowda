import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../../util/hooks";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { phoneWidthMax } from "../../../util/breakpoints";

const Title = styled.h3`
  margin-top: 20px;
`;
const Description = styled.p``;
const ServiceImg = styled(Image)`
  max-height: 250px;
  display: block;
  margin: auto;
  margin-bottom: 30px;
`;
function SingleService(props) {
  const { offset, title, description, imgUrl } = props;

  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(size.width < phoneWidthMax);

  useEffect(() => {
    setIsMobile(size.width < 1200);
  }, [size]);

  return (
    <Row style={{ marginBottom: 20 }}>
      {offset ? (
        <>
          <Col md={4}>
            <ServiceImg fluid src={imgUrl} />
          </Col>
          <Col md={8}>
            <Title> {title} </Title>
            <Description> {description} </Description>
          </Col>
        </>
      ) : (
        <>
          <Col md={8}>
            <Title> {title} </Title>
            <Description> {description} </Description>
          </Col>
          <Col md={4}>
            <ServiceImg fluid src={imgUrl} />
          </Col>
        </>
      )}
    </Row>
  );
}

export default SingleService;
