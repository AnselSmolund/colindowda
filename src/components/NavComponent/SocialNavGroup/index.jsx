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
  return (
    <SocialNavs className="justify-content-center">
      <SocialNav link={INSTAGRAM_LINK}>
        <FaInstagram></FaInstagram>
      </SocialNav>
      <SocialNav link={TWITTER_LINK}>
        <FaTwitter></FaTwitter>
      </SocialNav>
      <SocialNav link={YOUTUBE_LINK}>
        <FaYoutube></FaYoutube>
      </SocialNav>
      <SocialNav link={FACEBOOK_LINK}>
        <FaFacebook></FaFacebook>
      </SocialNav>
    </SocialNavs>
  );
}

export default SocialNavGroup;
