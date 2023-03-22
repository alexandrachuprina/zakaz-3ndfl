import styled from "styled-components";
import background from 'src/assets/Header/background.jpg';
import { queries } from '../assets/queries';
import Image from "next/image";

export const HeadWrapper = styled.div`
    height: fit-content;
    box-sizing: border-box;

  @media (min-width: ${queries.lg}) {
    height: 100vh;
  }
`
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

  @media (min-width: ${queries.lg}) {
    flex-direction: row;
    justify-content: space-between;
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
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.lg}) {
    flex-direction: row;
    align-self: center;
  }
`
export const Wrapper = styled.div`
  @media (min-width: ${queries.lg}) {
    height: 90%;
  display: flex;
  align-items: center;
  }
`
export const Text = styled.div`
  h1,
  h2 {
    color: white;
    padding-bottom: 2vh;
  }

  @media (min-width: ${queries.lg}) {
    h1 {
      padding-bottom: 8vh;
    }
    h2 {
      padding-bottom: 3vh;
    }
  }
`

