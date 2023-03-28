import styled from "styled-components";
import { queries } from "../assets/queries";

export const MapWrapper = styled.div`
  height: 35vh;

  @media (min-width: ${queries.lg}) {
    height: 90vh;
  }
`;
