import styled from "styled-components";
import { queries } from "@/src/assets/queries";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-self: center;
  
  @media (min-width: ${queries.lg}) {
    width: 40vw;
  }
`
export const Card = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 4vw 4vw 4vw 4vw;
`
export const InputHeader = styled.div`
  padding-bottom: 4vw;
`