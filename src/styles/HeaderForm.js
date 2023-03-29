import styled from "styled-components";
import { queries } from "@/src/assets/queries";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-self: center;
  margin-bottom: 4vh;

  @media (min-width: ${queries.lg}) {
    width: 400px;
    height: 400px;
    margin: 0;
  }
`;
export const Card = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 16px;
  
  @media (min-width: ${queries.lg}) {
    padding: 30px;
  }
`;
export const InputHeader = styled.div`
  padding-bottom: 24px;

  @media (min-width: ${queries.sm}) {
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
    }
  }
`;
