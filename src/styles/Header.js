import styled from "styled-components";
import background from 'src/assets/Header/background.jpg';
import { queries } from '../assets/queries';
import { colors } from "../assets/colors";
import Image from "next/image";

export const HeadWrapper = styled.div`
  background-color: ${colors.darkGray};

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
  margin: 0;

  @media (min-width: ${queries.lg}) {
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
  }

  @media (max-width: ${queries.xl}) {
    justify-content: space-between;
  }
`
export const Wrapper = styled.div`
  @media (min-width: ${queries.lg}) {
    height: 90vh;
    width: 100%;
    padding-top: 10vh;
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
export const ButtonWrapper = styled.div`
`