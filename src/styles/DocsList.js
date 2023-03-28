import styled from "styled-components";
import { colors } from "../assets/colors";

export const Section = styled.div`
  background-color: ${colors.lightGray};
`;
export const Wrapper = styled.div`
  padding: 4vh 0 4vh 0;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0 2vh 0;
  p {
    font-size: 1rem;
  }
`;
