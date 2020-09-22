import styled from "styled-components";
import { phoneOnly } from "../../util/breakpoints";
import { MainTheme } from "../../styles/colors";

export const MainContainer = styled.div`
  padding-top: 10px;
  ${phoneOnly(`
    padding-top: 0px;

  `)}
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-weight: 900;
  color: ${MainTheme.orange};
  background: ${MainTheme.lightBlue};
  padding: 10px;
  font-size: 70px;
  ${phoneOnly(`
    font-size: 40px;
    margin-bottom:20px;
   `)}
`;
