import React, { useState } from "react";
import "./style.css";
import styled from "styled-components";
import { MainTheme } from "../../styles/colors";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import { HiMenu, HiX } from "react-icons/hi";
import {
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK
} from "../../util/constants";
import { phoneOnly } from "../../util/breakpoints";

const MainContainer = styled(Container)``;

const MainNav = styled(Navbar)`
  background: transparent;
  ${phoneOnly(`
    background: rgba(255,255,255,0.9);
    font-size: 20px;
    
  `)}
  transition: 0.3s;
`;

const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
  &:focus {
    outline: none;
  }
`;
const SocialNavs = styled(Nav)`
  font-size: 24px;
  &:hover {
    color: blue;
  }
`;
function NavComponent() {
  const [navOpen, toggleNav] = useState(false);
  return (
    <MainNav
      sticky="top"
      expand="md"
      className="main-nav"
      style={navOpen ? { background: "white" } : { background: "transparent" }}
    >
      <MainContainer>
        <Navbar.Brand href="/"> Colin Dowda </Navbar.Brand>
        <NavbarToggle
          onClick={() =>
            setTimeout(() => {
              toggleNav(!navOpen);
            }, 100)
          }
          aria-controls="responsive-navbar-nav"
        >
          {navOpen ? (
            <HiX style={{ fontSize: 24 }} />
          ) : (
            <HiMenu style={{ fontSize: 24 }} />
          )}
        </NavbarToggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <SocialNavs>
            <Nav.Link href={INSTAGRAM_LINK}>
              <FaInstagram></FaInstagram>
            </Nav.Link>
            <Nav.Link href={TWITTER_LINK}>
              <FaTwitter></FaTwitter>
            </Nav.Link>
            <Nav.Link href={YOUTUBE_LINK}>
              <FaYoutube></FaYoutube>
            </Nav.Link>
            <Nav.Link href={FACEBOOK_LINK}>
              <FaFacebook></FaFacebook>
            </Nav.Link>
          </SocialNavs>
        </Navbar.Collapse>
      </MainContainer>
    </MainNav>
  );
}

export default NavComponent;
