import styled from "styled-components";
import { queries } from "@/src/assets/queries";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-self: center;
  margin-bottom: 4vh;

  @media (min-width: ${queries.lg}) {
    width: 40vw;
    margin: 0;
  }
`;
export const Card = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 4vw 4vw 4vw 4vw;
`;
export const InputHeader = styled.div`
  padding-bottom: 4vw;
`;
