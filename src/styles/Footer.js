import styled from "styled-components";
import { colors } from "../assets/colors";
import { queries } from "../assets/queries";

export const Section = styled.div`
  background-color: ${colors.darkGray};
  padding: 4vh 0 4vh 0;
`;
export const Logo = styled.div`
  padding: 0 0 2vh 0;
`;
export const Line = styled.div`
  height: 1px;
  background-color: white;
  margin: 2vh 0 2vh 0;
`;
export const Services = styled.div`
  p {
    color: white;
    padding: 0 30px 0 0;
  }

  @media (min-width: ${queries.lg}) {
    display: flex;
    flex-direction: row;
  }
`;
export const Credits = styled.div`
  p {
    color: white;
  }
`;
