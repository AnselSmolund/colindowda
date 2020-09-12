import React from "react";
import "./style.css";
import styled from "styled-components";
import { MainTheme } from "../../styles/colors";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK
} from "../../util/constants";

function NavComponent() {
  return (
    <Navbar sticky="top" expand="lg" className="main-nav">
      <Container style={{ color: "red" }}>
        <Navbar.Brand href="/"> Colin Dowda </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar>
    // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    // <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/">Home</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/about" eventKey="link-1">
    //       About
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/blog" eventKey="link-2">
    //       Blog
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/videos" eventKey="link-3">
    //       Videos
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/contact" eventKey="link-4">
    //       Contact
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}

export default NavComponent;
