import styled from "styled-components";
import { queries } from "../assets/queries";
import { colors } from "../assets/colors";

export const Section = styled.div`
background-color: ${colors.lightGray};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Symbols = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 3vh 0;

  h2 {
    padding-bottom: 1vh;
  }
`;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: black;
  width: 40px;
  height: 40px;
  p {
    color: white;
    margin: 0;
  }
`;
export const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: black;

  @media (min-width: ${queries.xs}) {
    height: 90%;
  }
  @media (min-width: ${queries.sm}) {
    height: 77%;
  }
  @media (min-width: ${queries.lg}) {
    height: 62%;
  }
  @media (min-width: ${queries.xl}) {
    height: 70%;
  }
`;
export const NoLine = styled.div``;
