import React from "react";
import { Nav } from "react-bootstrap";
import SocialNav from "../SocialNav";
import styled from "styled-components";
import {
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK
} from "../../../util/constants";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export const SocialNavs = styled(Nav)``;
function SocialNavGroup(props) {
  const { color, size } = props;
  return (
    <SocialNavs className="justify-content-center">
      <SocialNav link={INSTAGRAM_LINK} color={color}>
        <FaInstagram style={{ fontSize: size }}></FaInstagram>
      </SocialNav>
      <SocialNav link={TWITTER_LINK} color={color}>
        <FaTwitter style={{ fontSize: size }}></FaTwitter>
      </SocialNav>
      <SocialNav link={YOUTUBE_LINK} color={color}>
        <FaYoutube style={{ fontSize: size }}></FaYoutube>
      </SocialNav>
      <SocialNav link={FACEBOOK_LINK} color={color}>
        <FaFacebook style={{ fontSize: size }}></FaFacebook>
      </SocialNav>
    </SocialNavs>
  );
}

export default SocialNavGroup;
