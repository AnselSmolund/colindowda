import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { phoneOnly } from "../../../util/breakpoints";
import { motion } from "framer-motion";
import { MainTheme } from "../../../styles/colors";

function onMainPage() {
  console.log(window.location.pathname == "/");
  return window.location.pathname == "/";
}
const Link = styled(Nav.Link)`
  color: ${onMainPage()
    ? "rgba(255, 255, 255, 0.8) !important;"
    : "rgba(0,0,0, 0.8) !important;"};
  font-weight: 700;
  &:hover {
    color: ${MainTheme.orange} !important;
  }
  ${phoneOnly(`
    color: rgba(0,0,0,.5) !important;
   `)}
`;

function NavLink(props) {
  return <Link href={props.link}> {props.children} </Link>;
}

export default NavLink;
