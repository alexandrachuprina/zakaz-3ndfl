import styled from "styled-components";
import background from '../src/assets/Header/background.jpg';
import { queries } from '../src/assets/queries';
import Image from "next/image";

export const StyledHeader = styled.div`
  /* position: absolute; */
  /* height: 100vh; */
  /* display: flex; */

`
export const StyledLogo = styled.div`
  padding: 0 0 2vh 0;
`
export const StyledNavbar = styled.div`
  padding: 2vh 0 2vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2,
  p {
    color: white;
  }

  @media (max-width: ${queries.sm}) {

  }
  @media (min-width: ${queries.sm}) and (max-width: ${queries.md}) {

  }
  
`
export const StyledPhone = styled.div`
  padding: 0 0 2vh 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    padding: 0 0 0 2vh;
  }
`
export const StyledButtonWhatsUp = styled.div`
  padding: 1vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  p {
    padding: 0 0 0 2vh;
  }
`
export const StyledText = styled.div`
  h1,
  h2 {
    color: white;
    padding-bottom: 2vh;
  }
`

export const ghghgh = styled(Image)