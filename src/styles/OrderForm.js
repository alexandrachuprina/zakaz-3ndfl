import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const Section = styled.div`
  background-color: ${colors.lightGray};
  padding: 5vh 0 5vh 0;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1vh;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
