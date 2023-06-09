import styled from "styled-components";
import { queries } from "../assets/queries";

export const Text = styled.div`
  padding: 4vh 0 4vh 0;
`;
export const Header = styled.div``;
export const Subheader = styled.div`
  p {
    font-size: 1.2rem;
    padding: 2vh 0 2vh 0;
  }
`;
export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2vh;
  p {
    padding-left: 1vh;
    margin: 0;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Section = styled.div`
  @media (min-width: ${queries.lg}) {
    position: absolute;
    z-index: 1;
    background-color: white;
    padding: 0 2vh 0 2vh;
    left: 50vw;
    margin: 20px 0 0 0;
    width: 400px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
  }
`;
