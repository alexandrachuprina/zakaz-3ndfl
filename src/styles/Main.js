import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const MainWrapper = styled.div`
  display: grid;
  padding: 4vh 0vh 4vh 0;
  /* margin-bottom: 5%; */

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-template-rows: 100vh;
    column-gap: 10%;
  }

  @media (min-width: ${queries.xl}) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: 85vh;
    row-gap: 5%;
    column-gap: 5%;
  }
`
export const CardWrapper = styled.div`
  padding: 3vh 0 3vh 0;
  display: flex;
  flex-direction: column;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 25vh;
  padding-bottom: 2vh;
`
export const TextWrapper = styled.div`
  padding-bottom: 2vh;
`
export const Price = styled.div`
  margin: 2vh 0 2vh 0;
  display: inline-block;
  box-sizing: border-box;
  background-color: ${colors.yellow};
  color: black;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    padding-bottom: 2vh;
  }
`
export const ButtonsWrapper = styled.div`
  margin-top: auto;
`

