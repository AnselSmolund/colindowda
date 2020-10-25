import React from "react";
import styled from "styled-components";
import { MainTheme } from "../../../../styles/colors";
import { motion } from "framer-motion";
import { phoneOnly } from "../../../../util/breakpoints";

export const HireMeBtnContainer = styled(motion.button)`
  background-color: transparent;
  color: #fff;
  border: 2px solid ${MainTheme.cream};
  text-decoration: none;
  padding: 1em;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.5em;
  &:hover {
    background-color: ${MainTheme.cream};
    color: ${MainTheme.lightBlue};
  }
  &:focus {
    border: 2px solid ${MainTheme.lightBlue};
    outline: none;
  }
  ${phoneOnly(`
    font-size: 16px;
    letter-spacing: 0.3em;
  `)}
`;

const whileHoverStyle = {
  scale: 1.1,
  border: `2px solid ${MainTheme.cream}`,

  textDecoration: "none"
};

function MainBtn(props) {
  const { reference, btnText, clickFunction } = props;
  return (
    <HireMeBtnContainer
      ref={reference}
      onClick={clickFunction}
      whileHover={whileHoverStyle}
      whileTap={{ scale: 0.9 }}
    >
      {btnText}
    </HireMeBtnContainer>
  );
}

export default MainBtn;
