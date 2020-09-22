import React from "react";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { MainTheme } from "../../../styles/colors";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = styled(Nav.Link)`
  font-size: 24px;
  &:hover {
    color: ${MainTheme.orange} !important;
  }
`;

function SocialNav(props) {
  const { link } = props;
  console.log(props);
  return (
    <motion.div animate={{ scale: [0, 1] }} transition={{ duration: 0.5 }}>
      <NavLink href={link}>{props.children}</NavLink>
    </motion.div>
  );
}

export default SocialNav;
