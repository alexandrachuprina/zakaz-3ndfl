import styled from "styled-components";
import background from 'src/assets/Header/background.jpg';
import { queries } from '../assets/queries';
import Image from "next/image";

export const Logo = styled.div`
  padding: 0 0 2vh 0;
`
export const Navbar = styled.div`
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
export const Phone = styled.div`
  padding: 0 0 2vh 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    padding: 0 0 0 2vh;
  }
`
export const Text = styled.div`
  h1,
  h2 {
    color: white;
    padding-bottom: 2vh;
  }
`

// export const Background = styled(Image)`
//   background-image: url(${background});
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `