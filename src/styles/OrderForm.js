import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const Section = styled.div`
  background-color: ${colors.lightGray};
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40vh;
  padding-bottom: 2vh;

  @media (min-width: ${queries.lg}) {
    height: 70vh;
  }
  @media (min-width: ${queries.xl}) {
    height: 75vh;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
