import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { phoneOnly } from "../../util/breakpoints";
import SocialNav from "./SocialNav";
import SocialNavGroup from "./SocialNavGroup";
import NavLink from "./NavLink";

const MainContainer = styled(Container)``;

const MainNav = styled(Navbar)`
  background: transparent;
  ${phoneOnly(`
    background: rgba(255,255,255,0.9);
    font-size: 20px;
    
  `)}
  text-transform: uppercase;
  transition: 0.3s;
`;

const NavbarToggle = styled(Navbar.Toggle)`
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SocialNavs = styled(Nav)``;

export const screens = [
  {
    title: "About",
    link: "/about",
    color: "#ff0055",
  },
  {
    title: "Blog",
    link: "/blog",
    color: "#0099ff",
  },
  //   {
  //     title: "Videos",
  //     link: "/videos",
  //     color: "#22cc88"
  //   },
  {
    title: "Contact",
    link: "/contact",
    color: "#ffaa00",
  },
  //   {
  //     title: "Services",
  //     link: "/services",
  //     color: "#ffaa00"
  //   }
];

function NavComponent() {
  const [navOpen, toggleNav] = useState(false);
  return (
    <MainNav
      sticky="top"
      expand="md"
      className="main-nav"
      style={
        navOpen || window.location.pathname != "/"
          ? { background: "white" }
          : { background: "transparent" }
      }
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
            {screens.map(({ title, color, link }, i) => (
              <NavLink link={link}> {title} </NavLink>
            ))}
          </Nav>
          <SocialNavGroup />
        </Navbar.Collapse>
      </MainContainer>
    </MainNav>
  );
}

export default NavComponent;
