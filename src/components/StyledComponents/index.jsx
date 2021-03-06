import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";
import { Container } from "react-bootstrap";

export const MainContainer = styled(Container)`
  ${phoneOnly(`
    padding-top: 0px;

  `)}
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  color: ${MainTheme.orange};
  padding: 10px;
  font-size: 50px;
  text-transform: uppercase;
  ${phoneOnly(`
    font-size: 40px;
   `)}
`;
