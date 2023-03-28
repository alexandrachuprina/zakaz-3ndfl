import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const CardWrapper = styled.div`
  padding: 0 0 3vh 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 25vh;
  padding-bottom: 2vh;

  @media (min-width: ${queries.lg}) {
    height: 40vh;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 2vh; */

  @media (min-width: ${queries.xl}) {
    width: 65%;
  }
`;
export const Price = styled.div`
  margin: 2vh 0 2vh 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: ${colors.yellow};
  color: black;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  h2 {
    padding-bottom: 2vh;
  }
`;
export const ButtonsWrapper = styled.div`
  margin-top: auto;
  padding-top: 2vh;
`;
