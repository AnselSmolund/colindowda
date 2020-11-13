import React from "react";
import { Nav } from "react-bootstrap";
import SocialNav from "../SocialNav";
import styled from "styled-components";
import {
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK
} from "../../../util/constants";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export const SocialNavs = styled(Nav)`
  margin-left: ${props => (props.marginleft ? props.marginleft : 0)};
`;
function SocialNavGroup(props) {
  const { color, size, centered, marginLeft } = props;
  return (
    <SocialNavs
      className={centered && "justify-content-center"}
      marginLeft={marginLeft}
    >
      <SocialNav link={INSTAGRAM_LINK} color={color}>
        <FaInstagram style={{ fontSize: size }}></FaInstagram>
      </SocialNav>
      <SocialNav link={TWITTER_LINK} color={color}>
        <FaTwitter style={{ fontSize: size }}></FaTwitter>
      </SocialNav>
      {/* <SocialNav link={YOUTUBE_LINK} color={color}>
        <FaYoutube style={{ fontSize: size }}></FaYoutube>
      </SocialNav>
      <SocialNav link={FACEBOOK_LINK} color={color}>
        <FaFacebook style={{ fontSize: size }}></FaFacebook>
      </SocialNav> */}
      <SocialNav link={TIKTOK_LINK} color={color}>
        <SiTiktok style={{ fontSize: size }}></SiTiktok>
      </SocialNav>
    </SocialNavs>
  );
}

export default SocialNavGroup;
