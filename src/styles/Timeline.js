import styled from "styled-components";
import { queries } from "../assets/queries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Symbols = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2vw;
  /* padding-top: 2vh; */
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 3vh 0;
  h2 {
    padding-bottom: 1vh;
  }

  @media (min-width: ${queries.xl}) {
    height: 15vh;
  }
`;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: black;
  p {
    color: white;
  }

  @media (min-width: ${queries.sm}) {
    width: 4vw;
    height: 4vw;
  }
  @media (min-width: ${queries.lg}) {
    width: 3vw;
    height: 3vw;
  }
`;
export const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: black;

  @media (min-width: ${queries.sm}) {
    height: 90%;
  }
  @media (min-width: ${queries.lg}) {
    height: 80%;
  }
  @media (min-width: ${queries.xl}) {
    height: 70%;
  }
`;
export const NoLine = styled.div``;
