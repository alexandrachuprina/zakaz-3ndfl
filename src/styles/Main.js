import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const MainWrapper = styled.div`
  @media (min-width: ${queries.lg}) {
    margin-top: 100px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 45%);
    grid-template-rows: 700px;
    column-gap: 10%;
    row-gap: 120px;
  }

  @media (min-width: ${queries.xl}) {
    margin-top: 100px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: 700px;
    column-gap: 5%;
    row-gap: 120px;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
    height: 700px;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 200px;
`;

export const TextWrapper = styled.div`
  padding: 15px 0 15px 0;
`;

export const Price = styled.div`
  margin: 15px 0 30px 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: ${colors.yellow};
  color: black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    padding-bottom: 2vh;
  }
`;
export const ButtonsWrapper = styled.div`
  margin-top: auto;
`;
